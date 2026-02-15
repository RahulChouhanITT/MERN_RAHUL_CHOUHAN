import React from "react";
import type {CardProps } from "../../utils/types/bookType";
import "./style.css";
import { FAVOURITE_LABELS } from "../../utils/labels/labels";

const BookCard: React.FC<CardProps> = ({
  book,
  onViewDetails,
  onAddFavraite,
  actionLabel = FAVOURITE_LABELS.ADD,
}) => {
  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <div className="auhorslist-class">
      <label htmlFor="Authors">Authors:</label>
      <p id="Authors"className="book-authors">{book.authors.join(",")}</p>
     </div>
      <div className="button-div-class">
        {
          <button
            className="details-button"
            onClick={() => onViewDetails(book)}
          >
            Details
          </button>
        }

        <button
          className="details-button"
          onClick={() => onAddFavraite(book.id)}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
