import React from 'react';

const ListComponent = ({data,searchTerm}) =>{
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <ul>
             {filteredData.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
        </ul>
    );
};
export default ListComponent;