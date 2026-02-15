import React from "react";

import "./style.css";
import type { BookdetailProps } from "../../utils/types/bookType";

const BookDetails: React.FC<BookdetailProps> = ({ book, onClose }) => {
  return (
    <div className="details-overlay">
      <div className="details-card">
        <h2>{book.title}</h2>

        <div className="details-row">
          <span>ISBN</span>
          <span>{book.isbn}</span>
        </div>

        <div className="details-row">
          <span>Authors</span>
          <span>{book.authors.join(", ")}</span>
        </div>

        <div className="details-row">
          <span>Page Count</span>
          <span>{book.pageCount}</span>
        </div>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
