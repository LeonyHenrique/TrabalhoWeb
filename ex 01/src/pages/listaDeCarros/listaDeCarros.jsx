
import { useState } from "react"

export function ListaDeCarros() {
    const carros = [
      { id: 1, name: 'Fiat' },
      { id: 2, name: 'Chevrolet' },
      { id: 3, name: 'Gol' },
    ]
  
    const [listaDeCarros, setListaDeCarros] = useState(carros);
    const [novoCarros, setNovoCarros] = useState('');
  
    function adicionarCarros() {
      if (novoCarros.trim() !== '') {
        const EntradaNovoCarros = {
          id: listaDeCarros.length + 1,
          name: novoCarros,
        };
        setListaDeCarros([...listaDeCarros, EntradaNovoCarros]);
        setNovoCarros('');
      }
  
    }
  


  return (
    <>
      <h1>meus carros favoritos</h1>

      <div>
        <ul>
          {listaDeCarros.map((carros) => (
            <li key={carros.id}>{carros.name}</li>
          ))}
        </ul>
        <input
          type="text"
          value={novoCarros}
          onChange={(e) => setNovoCarros(e.target.value)}
          placeholder="Adicionar novo carros"
        />
        <br />
        <br />
        <button onClick={adicionarCarros}>Adicionar</button>

        

      </div>
    </>
  )
}