import React from "react";
import "../hojas-de-estilo/Pantalla.css";
//Defino el componente como función flecha en vez de function Pantalla,
//pero ojo! la defino: const Pantalla = ()=> sin las llaves{}; porque
//estoy retornando la estructura del componente y no una funcion ni nada raro.

const Pantalla = ({ input }) => <div className="input">{input}</div>;

export default Pantalla;
