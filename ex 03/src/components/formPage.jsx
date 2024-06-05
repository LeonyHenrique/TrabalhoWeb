import React, { useState } from "react";
import InputComponent from "./inputComponent";
import ButtonComponent from "./ButtonComponent";

const FormPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("Valor do input:", inputValue);
  };

  return (
    <div>
      <h1>Formulário</h1>
      <InputComponent value={inputValue} onChange={handleInputChange} />
      <ButtonComponent onClick={handleButtonClick} label="Enviar" />
    </div>
  );
};

export default FormPage;
