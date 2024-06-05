import React from "react";

const  SearchBar = ({ setSearchTerm }) => {
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };

    return(
        <input 
        type="text"
      placeholder="Buscar..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
 