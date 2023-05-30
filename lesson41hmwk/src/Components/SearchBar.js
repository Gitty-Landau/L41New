import "./SearchBar.css";
import { useState } from "react";
function SearchBar() {
  return (
    <>
      <label htmlFor="search-box">Search:</label>
      <input type="text" id="search-box"></input>
    </>
  );
}

export default SearchBar;
