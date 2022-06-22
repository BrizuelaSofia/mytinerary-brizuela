import "../styles/styles.css";
import { useState} from "react";
import Respuesta from "../components/Respuesta";
import CardCiudades from "../components/CardCiudades";
import {connect} from "react-redux"
//darle la misma clase.
//pexels 



function Cities(props) {
  const [inputValue, setInputValue] = useState("");

console.log(props)
 const filtroCiudades = props.cities?.filter((cadaCiudad) => {
  
    return cadaCiudad.nombreciudad.toLowerCase().startsWith(inputValue.toLowerCase().trim());
  });
  return (                                                                                                                                                                
    <div className="fondociudades altura" >
      <div className="inputsearch">
        <input onKeyUp={(evento) => {setInputValue(evento.target.value);}}type="text" name="text" className="input" placeholder="Type here!"  />
      </div>

     <div className="tarjetas"> { filtroCiudades?.length > 0 ? (<CardCiudades filtrado={filtroCiudades} />) : (<Respuesta /> ) } </div> 
    </div>
  );
}
const mapStateToProps = (state) =>{
return{
    cities:state.citiesReducers.cities
}

  //auxiliar:state.citiesReducers.auxiliar
}

export default connect(mapStateToProps, null)(Cities)



