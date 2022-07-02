import axios from "axios";

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
},
    SignIn: (data) => {
        return async (dispatch, getState) => {
            const res = await axios.post("http://localhost:4000/api/auth/signIn", { data } )
           console.log(res)
           console.log(res.data)
            if(res.data.success){
                dispatch(
                    {type: "SIGNIN", payload : res.data}
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

                   
                }
        }
    }
    
}
export default userActions