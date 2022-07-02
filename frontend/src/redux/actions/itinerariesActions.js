import axios from "axios";

//actiom: fucioeformadeojeto.
const itinerariesActions = {
  
    readItineraries: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/city/${id}`)
            console.log(res)
            dispatch({type: "READ_ITINERARIES", payload : res.data.response})
           
        }
}}

export default itinerariesActions