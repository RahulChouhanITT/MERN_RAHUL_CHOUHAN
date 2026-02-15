import { ExternalBook } from "../utils/types/book";
import { Book } from "../utils/types/book";
import { EXTERNAL_API } from "../utils/constants/apiConstants";
import { ERROR_MESSAGES } from "../utils/constants/message";

const mapBook = (book: ExternalBook): Book => ({
  id: book.id,
  title: book.title,
  isbn: book.isbn,
  pageCount: book.pageCount,
  authors: book.authors,
});

export const fetchBooksFromExternalAPI = async (): Promise<Book[]> => {
  const response = await fetch(EXTERNAL_API.BOOKS);

  if (!response.ok) {
    throw new Error(ERROR_MESSAGES.FETCH_BOOKS_FAILED);
  }

  const data: ExternalBook[] = await response.json();
  return data.map(mapBook);
};

export const fetchBookByIdFromExternalAPI = async (
  id: number
): Promise<Book> => {
  const response = await fetch(`${EXTERNAL_API.BOOKS}/${id}`);

  if (!response.ok) {
    throw new Error(ERROR_MESSAGES.BOOK_NOT_FOUND);
  }

  const data: ExternalBook = await response.json();
  return mapBook(data);
};
