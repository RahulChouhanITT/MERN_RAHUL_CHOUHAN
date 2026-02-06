import { IncomingMessage, ServerResponse } from "http";
import {
  fetchBooksFromExternalAPI,
  fetchBookByIdFromExternalAPI,
} from "../services/bookService";
import { HTTP_STATUS, HTTP_METHODS } from "../utils/constants/httpConstants";
import { sendResponse } from "../utils/sendResponse";
import { URL } from "url";
import {SERVER_CONFIG, API_ROUTES} from '../utils/constants/apiConstants'
import { ERROR_MESSAGES } from "../utils/constants/message";

export const handleBookRoutes = async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<boolean> => {
  if (!req.url || !req.method) return false;

  const url = new URL(req.url,SERVER_CONFIG.BASE_URL);

  if (req.method === HTTP_METHODS.GET && url.pathname.startsWith(`${API_ROUTES.BOOKS}/`)) {
    try {
      const id = Number(url.pathname.split("/").pop());

      if (isNaN(id)) {
        sendResponse(res, HTTP_STATUS.NOT_FOUND, {
          success: false,
          message: ERROR_MESSAGES.INVALID_BOOK_ID,
        });
        return true;
      }

      const book = await fetchBookByIdFromExternalAPI(id);

      sendResponse(res, HTTP_STATUS.OK, {
        success: true,
        data: book,
      });
    } catch (error) {
      sendResponse(res, HTTP_STATUS.NOT_FOUND, {
        success: false,
        message: (error as Error).message,
      });
    }

    return true;
  }

  if (req.method === HTTP_METHODS.GET && url.pathname === API_ROUTES.BOOKS) {
    try {
      const search = url.searchParams.get("search");
      const idsParam = url.searchParams.get("ids");

      const books = await fetchBooksFromExternalAPI();

      if (idsParam) {
        const ids = idsParam.split(",").map(Number);
        const filtered = books.filter((b) => ids.includes(b.id));

        sendResponse(res, HTTP_STATUS.OK, {
          success: true,
          data: filtered,
        });

        return true;
      }

      const filtered = search
        ? books.filter((b) =>
            b.title.toLowerCase().includes(search.toLowerCase())
          )
        : books;

      sendResponse(res, HTTP_STATUS.OK, {
        success: true,
        data: filtered,
      });
    } catch (error) {
      sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, {
        success: false,
        message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
      });
    }

    return true;
  }

  return false;
};
