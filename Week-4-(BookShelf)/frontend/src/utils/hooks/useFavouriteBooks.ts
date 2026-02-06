import { useState, useEffect, useCallback } from "react";
import { STORAGE_KEYS } from "../constants/constants";
import { FAVOURITE_PAGE_MESSAGES } from "../labels/labels";


export const useFavouriteBooks = () => {
  const [favouriteIds, setFavouriteIds] = useState<number[]>(() => {
    const stored = localStorage.getItem(
      STORAGE_KEYS.FAVOURITE_BOOK_IDS
    );
    return stored ? JSON.parse(stored) : [];
  });

  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.FAVOURITE_BOOK_IDS,
      JSON.stringify(favouriteIds)
    );
  }, [favouriteIds]);

  const addToFavourite = useCallback((id: number) => {
    setFavouriteIds((prev) => {
      if (prev.includes(id)) {
        setMessage(FAVOURITE_PAGE_MESSAGES.ALREADY_EXISTS);
        return prev;
      }
      setMessage(FAVOURITE_PAGE_MESSAGES.ADDED);
      return [...prev, id];
    });
  }, []);

  const removeFromFavourite = useCallback((id: number) => {
    setFavouriteIds((prev) => {
      setMessage(FAVOURITE_PAGE_MESSAGES.REMOVED);
      return prev.filter((favId) => favId !== id);
    });
  }, []);

  const isFavourite = useCallback(
    (id: number) => favouriteIds.includes(id),
    [favouriteIds]
  );

  const clearMessage = useCallback(() => {
    setMessage(null);
  }, []);

  return {
    favouriteIds,
    addToFavourite,
    removeFromFavourite,
    isFavourite,
    message,
    clearMessage,
  };
};
