import React from "react";
import "./SearchBar.css";

const SearchBar = () => (
  <div className="search-bar-container">
    <input
      className="search-bar"
      type="text"
      placeholder="Search Internships"
    />
  </div>
);

export default SearchBar;
