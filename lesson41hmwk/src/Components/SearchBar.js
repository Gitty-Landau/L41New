import "./SearchBar.css";
import { useState } from "react";
function SearchBar(props) {
  return (
    <>
      <label for="search-box">Search:</label>
      <input type="text" id="search-box"></input>
    </>
  );
}

export default SearchBar;
