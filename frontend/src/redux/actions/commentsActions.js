import axios from 'axios';


const commentsActions = {
  
    addComment: (comment) => {

        const token = localStorage.getItem('token') //verifica si hay un usuario, va al token
        return async (dispatch, getState) => {

            if (comment.comment !== "") { 
                const res = await axios.post(`http://localhost:4000/api/itineraries/comment`, { comment }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            }
            else {
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: "ingresa un comentario para guardarlo",
                        success: false
                    }
                })
            }
        }

    },
    modifyComment: (id, comment) => { //el parametro tiene q ser id aca en modifi tmb asi? a okis

        const token = localStorage.getItem('token') //si por eso HABRE TOCADO ALGO EN RUTES 
        return async (dispatch, getState) => {
            const res = await axios.put(`http://localhost:4000/api//itineraries/comment/${id}` , { comment }, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            })
            dispatch({
                type: 'MESSAGE', 
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

            return res
        }
    }, 
    deleteComment: (id) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:4000/api/itineraries/comment/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },

}

export default commentsActions;