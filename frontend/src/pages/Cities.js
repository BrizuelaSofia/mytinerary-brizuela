import "../styles/styles.css";
import { useState, useEffect } from "react";
import Respuesta from "../components/Respuesta";
import CardCiudades from "../components/CardCiudades";
//darle la misma clase.
//pexels 
import axios from 'axios'


function Cities() {
  const [inputValue, setInputValue] = useState("");
  const [ciudades, setCiudades] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities")
    .then((data)=> setCiudades(data.data.response.cities))
  }, [])
console.log(ciudades)

  console.log(inputValue);

 const filtroCiudades = ciudades.filter((cadaCiudad) => {
    return cadaCiudad.nombreciudad.toLowerCase().startsWith(inputValue.toLowerCase().trim());
  });
  return (                                                                                                                                                                
    <div className="fondociudades altura" >
      <div className="inputsearch">
        <input onKeyUp={(evento) => {setInputValue(evento.target.value);}}type="text" name="text" className="input" placeholder="Type here!"  />
      </div>

     <div className="tarjetas"> {filtroCiudades.length > 0 ? (<CardCiudades filtrado={filtroCiudades} />) : (<Respuesta /> ) } </div> 
    </div>
  );
}

export default Cities;



