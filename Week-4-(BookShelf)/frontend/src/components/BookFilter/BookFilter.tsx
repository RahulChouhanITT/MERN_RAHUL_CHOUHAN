import React from "react";
import SelectFilter from "../SelectFilter/SelectFilter";
import "./style.css";
import { BOOK_FILTER_LABELS, BOOK_FILTER_PLACEHOLDERS } from "../../utils/labels/labels";
import type { BookFilterpropes } from "../../utils/types/bookType";

const BookFilters: React.FC<BookFilterpropes> = ({
  authorValue,
  pageValue,
  authorOptions,
  pageOptions,
  onAuthorChange,
  onPageChange,
}) => {
  return (
    <section className="book-filters">
      <div className="filter-item">
        <span className="filter-label">
          {BOOK_FILTER_LABELS.AUTHOR}
        </span>
        <SelectFilter
          value={authorValue}
          options={authorOptions}
          placeholder={BOOK_FILTER_PLACEHOLDERS.ALL_AUTHORS}
          onChange={onAuthorChange}
        />
      </div>

      <div className="filter-item">
        <span className="filter-label">
          {BOOK_FILTER_LABELS.PAGE_COUNT}
        </span>
        <SelectFilter
          value={pageValue}
          options={pageOptions}
          placeholder={BOOK_FILTER_PLACEHOLDERS.ALL_PAGES}
          onChange={onPageChange}
        />
      </div>
    </section>
  );
};

export default BookFilters;
