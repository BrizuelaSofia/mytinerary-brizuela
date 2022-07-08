import axios from "axios";

//actiom: fucioeformadeojeto.
const itinerariesActions = {
  
    readItineraries: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/city/${id}`)
            console.log(res)
            dispatch({type: "READ_ITINERARIES", payload : res.data.response})
           
        }
},
getOneItinerary: (id) => {
    // console.log(id)
    return async() => {
        try {
            const res = await axios.get(`http://localhost:4000/api/itineraries/${id}`)
             console.log(res)
            return res.data.response
        }catch (err) {
            console.log(err)
        }
    }
},
likeDislike:(id) => {
    console.log(id)
    const token = localStorage.getItem("token") //levantamos el token.
    console.log(token)
    return async () => {
        try{ //primer parametro objeto vacio pq en la estructura de axios despues de la , va el body. si no dejamos el objeto vacio tomaria a header como body y l header no llegaria nunca
            let response = await axios.put(`http://localhost:4000/api/like/${id}`, {},
            {headers:{Authorization: "Bearer " +token
                     }
            })
            console.log(response)

            return response
        } catch (error) {
            console.log(error) 
        }
    }
},
// likeDislike: (itineraryId) => {
//     const token = localStorage.getItem('token')
//     return async() => {
//         try {
//             const answer = await axios.put(http://localhost:4000/api/itineraries/likeDislike/${itineraryId},{},
//                 {headers: {Authorization: "Bearer "+token}}
//             )
//             //console.log(answer.data.response)
//             return answer.data.response
//         }catch (err) {
//             console.log(err)
//         }
//     }
// },
}

export default itinerariesActions