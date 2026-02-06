import React from "react";
import "./style.css";
import { UI_TEXT } from "../../utils/labels/labels";
import type { SearchProps } from "../../utils/types/bookType";

const Search: React.FC<SearchProps> = ({ value, handleSearchOperation }) => {
  return (
    <div className="search-container">
      <span className="search-icon"></span>
      <input
        type="text"
        value={value}
        placeholder={UI_TEXT.SEARCH_PLACEHOLDER}
        className="search-input"
        onChange={(e) =>handleSearchOperation(e.target.value)}
      />
    </div>
  );
};

export default Search;
