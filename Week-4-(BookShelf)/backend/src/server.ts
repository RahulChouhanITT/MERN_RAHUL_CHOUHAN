import http from "http";
import { IncomingMessage, ServerResponse } from "node:http";
import { handleBookRoutes } from "./routes/bookroutes";
import { sendResponse } from "./utils/sendResponse";
import { CORS_HEADERS, HTTP_METHODS, HTTP_STATUS } from "./utils/constants/httpConstants";
import { ERROR_MESSAGES } from "./utils/constants/message";
import { SERVER_CONFIG } from "./utils/constants/apiConstants";


const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    try {
      res.setHeader(
        "Access-Control-Allow-Origin",
        CORS_HEADERS.ORIGIN
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        CORS_HEADERS.METHODS
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        CORS_HEADERS.HEADERS
      );

      if (req.method === HTTP_METHODS.OPTIONS) {
        res.writeHead(204);
        res.end();
        return;
      }

      const isRouteHandled = await handleBookRoutes(req, res);

      if (!isRouteHandled) {
        sendResponse(res, HTTP_STATUS.NOT_FOUND, {
          success: false,
          message: ERROR_MESSAGES.ROUTE_NOT_FOUND,
        });
      }
    } catch {
      sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, {
        success: false,
        message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
      });
    }
  }
);

server.listen(SERVER_CONFIG.PORT, () => {
  console.log(
    `Server running at http://localhost:${SERVER_CONFIG.PORT}`
  );
});
