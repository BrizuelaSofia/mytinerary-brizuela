import "../styles/styles.css";
import React, { useState } from "react";
import data from "../components/data.json";
import Respuesta from "../components/Respuesta";
import CardCiudades from "../components/CardCiudades";
//darle la misma clase.

function Cities() {
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);

  const filtroCiudades = data.filter((cadaCiudad) => {
    return cadaCiudad.ciudad.toLowerCase().startsWith(inputValue.toLowerCase());
  });
  return (
    <>
      <div>
        <input
          onKeyUp={(evento) => {
            setInputValue(evento.target.value);
          }}
          type="text"
        />
      </div>

      {filtroCiudades.length > 0 ? (
        <CardCiudades filtrado={filtroCiudades} />
      ) : (
        <Respuesta />
      )}
    </>
  );
}

export default Cities;
