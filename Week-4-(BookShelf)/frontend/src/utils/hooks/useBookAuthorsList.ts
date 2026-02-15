import { useMemo } from "react";
import type { Option, Book }  from "../types/bookType";
export const useBookAuthors = (books: Book[]) => {
  const authorOptions: Option[] = useMemo(() => {
    const allAuthors = books.flatMap((book) => book.authors);

    const uniqueAuthors = Array.from(new Set(allAuthors));

    return uniqueAuthors.map((author) => ({
      label: author,
      value: author,
    }));
  }, [books]);

  return { authorOptions };
};
