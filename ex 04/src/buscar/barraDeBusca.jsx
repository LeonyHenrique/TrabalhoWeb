import React from "react";
import "./barraDeBusca.css";

const BarraDeBusca = ({ definirTermoDeBusca }) => {
    const lidarComMudanca = (evento) => {
        definirTermoDeBusca(evento.target.value);
    };

    return (
        <input
            className="barra-de-busca"
            type="text"
            placeholder="Buscar..."
            onChange={lidarComMudanca}
        />
    );
};

export default BarraDeBusca;
