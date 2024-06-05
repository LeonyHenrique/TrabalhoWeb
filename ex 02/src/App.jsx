import React from "react";
import "./App.css";
import Relogio from "./relogio/relogio"; 

const App = () => {
  return (
    <div className="App">
      <h1> Hora : </h1>
      <Relogio />
    </div>
  );
};

export default App;
