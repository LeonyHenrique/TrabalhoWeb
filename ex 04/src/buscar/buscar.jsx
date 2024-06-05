import React, { useState } from 'react';
import SearchBar from './searchBar';
import ListComponent from './listComponent';
import "./buscar.css";

const dataList =[
    {id: 1, name: "celular"},
    {id: 2, name: "computador"},
    {id: 3, name: "televisão"},
    {id: 4, name: "notebook"},
    {id: 5, name: "teclado"},
    {id: 6, name: "rádio"},
];

const Buscar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="container">
            <h1>Buscar: </h1>
            <SearchBar setSearchTerm={setSearchTerm} />
            <ListComponent data={dataList} searchTerm={searchTerm} />
        </div>
    );
};

export default Buscar;