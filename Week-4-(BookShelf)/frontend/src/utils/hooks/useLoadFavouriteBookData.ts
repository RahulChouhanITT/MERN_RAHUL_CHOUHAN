import { useState, useCallback } from "react";
import type { ApiResponse, Book } from "../types/bookType";
import { API_ENDPOINTS, EMPTY } from "../constants/constants";
import { FAVOURITE_API_MESSAGES } from "../labels/labels";

export const useLoadFavouriteBookData = () => {
  const [books, setBooks] = useState<Book[]>(EMPTY.Array);
  const [loading, setLoading] = useState(false);
 const [error, setError] = useState<string | null>(EMPTY.NULL);

  const fetchFavouriteBooks = useCallback(async (ids: number[]) => {
    if (ids.length === 0) {
      setBooks([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `${API_ENDPOINTS.BOOKS}?ids=${ids.join(",")}`
      );

      if (!res.ok) {
        throw new Error(FAVOURITE_API_MESSAGES.FETCH_FAILED);
      }

      const json: ApiResponse = await res.json();
      setBooks(json.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { books, loading, error, fetchFavouriteBooks };
};
