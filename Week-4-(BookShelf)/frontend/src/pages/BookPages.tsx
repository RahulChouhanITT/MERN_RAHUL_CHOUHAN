import { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import BookFilters from "../components/BookFilter/BookFilter";
import BookCard from "../components/BookCard/BookCard";
import BookDetails from "../components/bookDetails/BookDetails";
import { useLoadBookData } from "../utils/hooks/useLoadBookData";
import { useBookSearch } from "../utils/hooks/useBookSearch";
import { useBookFilters } from "../utils/hooks/useBookFilters";
import { useBookAuthors } from "../utils/hooks/useBookAuthorsList";
import { useFavouriteBooks } from "../utils/hooks/useFavouriteBooks";
import type { Book } from "../utils/types/bookType";
import { EMPTY, PAGE_RANGE_OPTIONS } from "../utils/constants/constants";
import { BOOKS_PAGE_TEXT, FAVOURITE_LABELS } from "../utils/labels/labels";

const BooksPage = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(EMPTY.NULL);

  const { books, loading, error, fetchBooks } = useLoadBookData();
  const { searchText, setSearchText, searchedBooks } = useBookSearch(books);

  const {
    author,
    pageRange,
    setAuthor,
    setPageRange,
    filteredBooks,
  } = useBookFilters(searchedBooks);

  const { authorOptions } = useBookAuthors(books);

  const { addToFavourite, removeFromFavourite, isFavourite } =
    useFavouriteBooks();

  const toggleFavourite = (bookId: number) => {
    if (isFavourite(bookId)) {
      removeFromFavourite(bookId);
    } else {
      addToFavourite(bookId);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
      <Search
        value={searchText}
        handleSearchOperation={setSearchText}
      />

      <BookFilters
        authorValue={author}
        pageValue={pageRange}
        authorOptions={authorOptions}
        pageOptions={PAGE_RANGE_OPTIONS}
        onAuthorChange={setAuthor}
        onPageChange={setPageRange}
      />

      <section className="card-section-class">
        {loading && <p>{BOOKS_PAGE_TEXT.LOADING}</p>}
        {error && <p className="error">{error}</p>}

        {!loading && filteredBooks.length === 0 && (
          <p className="no-books-text">{BOOKS_PAGE_TEXT.NO_BOOKS}</p>
        )}

        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onViewDetails={setSelectedBook}
            onAddFavraite={toggleFavourite}
            actionLabel={
              isFavourite(book.id)
                ? FAVOURITE_LABELS.REMOVE
                : FAVOURITE_LABELS.ADD
            }
          />
        ))}

        {selectedBook && (
          <BookDetails
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
          />
        )}
      </section>
    </>
  );
};

export default BooksPage;
