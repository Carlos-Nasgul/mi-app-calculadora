import React from "react";
import "../hojas-de-estilo/Botones.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : null
      }`}
      onClick={() => props.manejarClic(props.children)} //{ ()=>es porque debemos llamar anonimamente a la función }
    >
      {props.children}
    </div>
  );
}

export default Boton;
