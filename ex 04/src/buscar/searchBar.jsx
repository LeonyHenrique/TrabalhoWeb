import React from "react";
import "./searchBar.css";


const  SearchBar = ({ setSearchTerm }) => {
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };

    return(
      <input
      className="search-bar"
      type="text"
      placeholder="Buscar..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
 