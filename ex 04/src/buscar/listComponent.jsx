import React from 'react';
import './listComponent.css';

const ListComponent = ({data,searchTerm}) =>{
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <ul className="list">
        {filteredData.map(item => (
          <li key={item.id} className="list-item">{item.name}</li>
        ))}
      </ul>
    );
  };
export default ListComponent;