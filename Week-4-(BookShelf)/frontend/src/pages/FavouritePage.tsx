import { useEffect, useState } from "react";
import BookCard from "../components/BookCard/BookCard";
import BookDetails from "../components/bookDetails/BookDetails";
import { useFavouriteBooks } from "../utils/hooks/useFavouriteBooks";
import { useLoadFavouriteBookData } from "../utils/hooks/useLoadFavouriteBookData";
import type { Book } from "../utils/types/bookType";
import { FAVOURITE_LABELS, FAVOURITE_PAGE_TEXT } from "../utils/labels/labels";
import { EMPTY } from "../utils/constants/constants";

const FavouritePage = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(EMPTY.NULL);
  const { favouriteIds, removeFromFavourite } = useFavouriteBooks();

  const {
    books,
    loading,
    error,
    fetchFavouriteBooks,
  } = useLoadFavouriteBookData();

  useEffect(() => {
    fetchFavouriteBooks(favouriteIds);
  }, [favouriteIds, fetchFavouriteBooks]);

  return (
    <>
      <h1 style={{ marginBottom: "1rem" }}>
        {FAVOURITE_PAGE_TEXT.TITLE}
      </h1>

      {loading && <p>{FAVOURITE_PAGE_TEXT.LOADING}</p>}
      {error && <p className="error">{error}</p>}

      {!loading && books.length === 0 && (
        <p className="no-books-text">
          {FAVOURITE_PAGE_TEXT.EMPTY}
        </p>
      )}

      <section className="card-section-class">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onViewDetails={setSelectedBook}
            onAddFavraite={() => removeFromFavourite(book.id)}
            actionLabel={FAVOURITE_LABELS.REMOVE}
          />
        ))}
      </section>

      {selectedBook && (
        <BookDetails
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </>
  );
};

export default FavouritePage;
