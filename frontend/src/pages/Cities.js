import "../styles/styles.css";
import { useState, useEffect} from "react";
import Respuesta from "../components/Respuesta";
import CardCiudades from "../components/CardCiudades";
import {useDispatch, useSelector} from "react-redux"
import citiesActions from "../redux/actions/citiesActions"
//darle la misma clase.
//pexels 



function Cities(props) {
  const [inputValue, setInputValue] = useState("");
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(citiesActions.filterCities(inputValue))
  },[inputValue])

  const filtroCiudades = useSelector(store => store.citiesReducers.filter)
 
  return (                                                                                                                                                                
    <div className="fondociudades altura" >
      <div className="inputsearch">
        <input onKeyUp={(evento) => {setInputValue(evento.target.value);}}type="text" name="text" className="input" placeholder="Type here!"  />
      </div>

     <div className="tarjetas"> { filtroCiudades?.length > 0 ? (<CardCiudades filtrado={filtroCiudades} />) : (<Respuesta /> ) } </div> 
    </div>
  );
}

  //auxiliar:state.citiesReducers.auxiliar


export default Cities



