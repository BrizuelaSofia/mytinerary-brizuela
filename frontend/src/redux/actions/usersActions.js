import axios from "axios";
//npm i passport-jwt

const userActions = {
    
    SignUp: (data) => {
        return async (dispatch, getState) => {
            try{ 
                const res = await axios.post("http://localhost:4000/api/auth/signUp", { data } )
           console.log(res)
           dispatch({
            type: 'MESSAGE',
            payload: {
                view: true,
                message: res.data.message,
                success: res.data.success
            }
        })
       return res
    } catch (error) {
        console.log(error)
    }

    }
}, //guardo y capturo el token en el local storage.
    SignIn: (data) => {
        return async (dispatch, getState) => {
            const res = await axios.post("http://localhost:4000/api/auth/signIn", { data } )
           console.log(res)
           console.log(res.data)
            if(res.data.success){
                localStorage.setItem('token', res.data.response.token)
                console.log(res.data.response.token)
                dispatch(
                    {type: "SIGNIN", payload: res.data.response.userData}
            )
                
                    dispatch({type: "MESSAGE", payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                
            }else{
                    dispatch({
                        type: "MESSAGE",
                        payload: {
                            view:true,
                            message: res.data.message,
                            success: res.data.success
                        }
                    })

                }return(res.data)
                }
        },
    
    VerifyToken: (token) => {  
        return async (dispatch, getState) => {
        //console.log(token)
        await axios.get("http://localhost:4000/api/auth/loginToken", 
        {headers: {'Authorization': 'Bearer '+token}} )
        //console.log(user)
        .then (user => {if (user.data.success) {
         dispatch({
                    type: 'SIGNIN',
                    payload: user.data.response
                })
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                })
            } else {localStorage.removeItem('token')}
        }
            ).catch(error => {
                if (error.response.status === 401)
                dispatch ({
                    type: 'MESSAGE',
                    payload: {view:true,
                                message: 'Please register again',
                                success: false}})
                localStorage.removeItem('token')
            })
    }
  },
  signOut: () => {
    return (dispatch, getState) => {

        localStorage.removeItem('token')
        dispatch({
            type: 'SIGNIN',
            payload: null
        })
    }
},
}
export default userActions