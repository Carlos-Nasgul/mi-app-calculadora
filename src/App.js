import "./App.css";
import Boton from "./componentes/Boton";
import BotonClear from "./componentes/BotonClear";
import Pantalla from "./componentes/Pantalla";
import { useState } from "react";
import { evaluate } from "mathjs"; //Paquete libreria para poder evaluar
import logoFreeCodeCamp from "./imagenes/FreeCodeCamp_logo.png";
import LogoCalculadora from "./componentes/LogoCalculadora";

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const agregarInput = (valor) => {
    if (error) setError(""); // Limpiar cualquier mensaje de error previo
    setInput(input + valor);
  };

  const validarInput = (input) => {
    // Validar que el input solo contenga números, operadores y puntos decimales
    const regex = /^[0-9+\-*/.()]*$/;
    return regex.test(input);
  };

  const calcularResultado = () => {
    if (!input) {
      setError("Por favor, ingrese valores para calcular");
      return;
    }

    if (!validarInput(input)) {
      setError("Entrada inválida");
      return;
    }

    try {
      const resultado = evaluate(input);
      setInput(resultado.toString());
    } catch (error) {
      setError("Error en el cálculo");
    }
  };

  return (
    <div className="App">
      <LogoCalculadora className="logoFreeCodeCamp">
        {logoFreeCodeCamp}
      </LogoCalculadora>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>C</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
