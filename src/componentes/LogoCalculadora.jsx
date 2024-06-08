import React from "react";
import logoFreeCodeCamp from "../imagenes/FreeCodeCamp_logo.png";
import "../hojas-de-estilo/Logo.css";

function LogoCalculadora() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={logoFreeCodeCamp}
        className="freecodecamp-logo"
        alt="Logo de freeCodeCamp"
      />
    </div>
  );
}

export default LogoCalculadora;
