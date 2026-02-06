import { useState, useMemo } from "react";
import type { Book } from "../types/bookType";
import { EMPTY } from "../constants/constants";

export const useBookFilters = (books: Book[]) => {
  const [author, setAuthor] = useState(EMPTY.STRING);
  const [pageRange, setPageRange] = useState(EMPTY.STRING);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const authorMatch = author
        ? book.authors.includes(author)
        : true;

      const pageMatch = (() => {
        if (!pageRange) return true;
        if (pageRange === "0-200")
          return book.pageCount >= 0 && book.pageCount <= 200;
        if (pageRange === "200-400")
          return book.pageCount > 200 && book.pageCount <= 400;
        if (pageRange === "400+")
          return book.pageCount > 400;
        return true;
      })();

      return authorMatch && pageMatch;
    });
  }, [books, author, pageRange]);

  return {
    author,
    pageRange,
    setAuthor,
    setPageRange,
    filteredBooks,
  };
};
