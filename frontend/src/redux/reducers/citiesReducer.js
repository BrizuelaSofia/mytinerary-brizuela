const initialState = {
  cities: [],
  auxiliar: [],
  oneCity: {},
  filter: []
};

const citiesReducers = (state = initialState, action) => {
  switch (action.type) { //condicion en cada caso
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

//payload escucha el evento, en este caso va a traer todo, abrimos cities y queremos q traigan todas las cities.
