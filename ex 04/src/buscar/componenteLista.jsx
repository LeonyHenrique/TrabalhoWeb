import React from 'react';
import './componenteLista.css';

const ComponenteLista = ({ dados, termoDeBusca }) => {
    const dadosFiltrados = dados.filter(item =>
        item.name.toLowerCase().includes(termoDeBusca.toLowerCase())
    );

    return (
        <ul className="lista">
            {dadosFiltrados.map(item => (
                <li key={item.id} className="item-lista">{item.name}</li>
            ))}
        </ul>
    );
};

export default ComponenteLista;
