const initialState = {
    itineraries: [],

  };
  
  const itinerariesReducers = (state = initialState, action) => {
    switch (action.type) { //condicion en cada caso
      case "READ_ITINERARIES":
        return {
          ...state,
           itineraries: action.payload,
          }
      default:
        return state;
    }
  }
  export default itinerariesReducers;