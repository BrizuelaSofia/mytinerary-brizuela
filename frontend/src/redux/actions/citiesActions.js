import axios from "axios";


const citiesActions = {
    
    getCities: () => {
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/cities")
           
            dispatch({type: "GETCITIES", payload : res.data.response.cities})
           
        }
    },
    getOneCity: (id) => {
        return async (dispatch, getState) =>{
            const res = await axios.get(`http://localhost:4000/api/cities/${id}`)
             console.log(res)
        
            dispatch({type: "GET_ONE_CITY", payload: res.data.response.city})
        }
    },


    filterCities: (input) => {
        return (dispatch, getState) =>{
            dispatch({type: "FILTER_CITIES", payload: input})
        }
    }
}

export default citiesActions