import React, { useState } from 'react';
import BarraDeBusca from './barraDeBusca';
import ComponenteLista from './componenteLista';
import "./buscar.css";

const listaDeDados = [
    { id: 1, name: "celular" },
    { id: 2, name: "computador" },
    { id: 3, name: "televisão" },
    { id: 4, name: "notebook" },
    { id: 5, name: "teclado" },
    { id: 6, name: "rádio" },
];

const Buscar = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('');

    return (
        <div className="container">
            <h1>Buscar: </h1>
            <BarraDeBusca definirTermoDeBusca={setTermoDeBusca} />
            <ComponenteLista dados={listaDeDados} termoDeBusca={termoDeBusca} />
        </div>
    );
};

export default Buscar;
