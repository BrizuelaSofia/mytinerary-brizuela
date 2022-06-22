const initialState = {
  cities: [],
  auxiliar: [],
};

const citiesReducers = (state = initialState, action) => {
  switch (action.type) { //condicion en cada caso
    case "GETCITIES":
      return {
        ...state,
        cities: action.payload,
        auxiliar: action.payload,
      };
    default:
      return state;
  }
};
export default citiesReducers;

//payload escucha el evento, en este caso va a traer todo, abrimos cities y queremos q traigan todas las cities.
