import { useState, useCallback } from "react";
import type { ApiResponse, Book } from "../types/bookType";
import { API_ENDPOINTS, EMPTY } from "../constants/constants";
import { BOOK_API_MESSAGES } from "../labels/labels";

export const useLoadBookData = () => {
  const [books, setBooks] = useState<Book[]>(EMPTY.Array);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(EMPTY.NULL);

  const fetchBooks = useCallback(async (search?: string) => {
    try {
      setLoading(true);
      setError(null);

      const url = search
        ? `${API_ENDPOINTS.BOOKS}?search=${search}`
        : API_ENDPOINTS.BOOKS;

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(BOOK_API_MESSAGES.FETCH_FAILED);
      }

      const json: ApiResponse = await res.json();
      setBooks(json.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { books, loading, error, fetchBooks };
};
