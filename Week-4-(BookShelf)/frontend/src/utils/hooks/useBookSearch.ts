import { useState, useMemo } from "react";
import type { Book } from "../types/bookType";
import { EMPTY } from "../constants/constants";

export const useBookSearch = (books: Book[]) => {
  const [searchText, setSearchText] = useState(EMPTY.STRING);
  
  const searchedBooks:Book[] = useMemo(() => {
    if (!searchText) return books;

    return books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [books, searchText]);

  return {
    searchText,
    setSearchText,
    searchedBooks,
  };
};
