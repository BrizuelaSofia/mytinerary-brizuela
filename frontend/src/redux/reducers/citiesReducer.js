const initialState = {
  cities: [],
  auxiliar: [],
  oneCity: {},
  filter: []
};

const citiesReducers = (state = initialState, action) => {
  //condicion en cada caso
  switch (action.type) { 
    case "GETCITIES":
      return {
        ...state,
        cities: action.payload,
        auxiliar: action.payload,
        filter:action.payload
      }
      case"GET_ONE_CITY":
      return{
        ...state,
        oneCity:action.payload,
        auxiliar:action.payload
      }
      case "FILTER_CITIES":
        let cityFilter = state.cities.filter(city => city.nombreciudad.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
        return{
          ...state,
          filter: cityFilter

        }
    default:
      return state;
  }
}
export default citiesReducers;

//payload= carga.
