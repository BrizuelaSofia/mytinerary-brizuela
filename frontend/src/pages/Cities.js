import "../styles/styles.css";
import { useState, useEffect} from "react";
import Answer from "../components/Answer";
import CardCities from "../components/CardCities";
import {useDispatch, useSelector} from "react-redux"
import citiesActions from "../redux/actions/citiesActions"
import Answer from "../components/Answer";




function Cities() {
  const [inputValue, setInputValue] = useState("");
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(citiesActions.filterCities(inputValue))
    // eslint-disable-next-line
  },[inputValue])

  const filterCities = useSelector(store => store.citiesReducers.filter)
 
  return (                                                                                                                                                                
    <div className="fondociudades altura" >
      <div className="inputsearch">
        <input onKeyUp={(evento) => {setInputValue(evento.target.value);}}type="text" name="text" className="input" placeholder="Search by city!"  />
      </div>

     <div className="tarjetas"> {filtroCiudades?.length > 0 ? (<CardCities filter={filterCities} />) : (<Answer /> ) } </div> 
    </div>
  );
}


export default Cities



