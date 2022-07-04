import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import usersActions from '../redux/actions/usersActions'
import {useNavigate} from 'react-router-dom'

export default function GoogleSignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate()


   async function handleCallbackResponse(response) {
        console.log(response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
         const res = await dispatch(usersActions.SignIn({         
              firstName: userObject.given_name,
              lastName:userObject.family_name,
              imageUser:userObject.picture,
              email:userObject.email, 
              password:userObject.sub, 
              from: 'google'
          
            
        })) 
        if(res.success){
            navigate('/')
          } 
}

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '1059973922697-0uh38ohsrmt5ru5jouqksmvsq3m0akb0.apps.googleusercontent.com',
             
            callback: handleCallbackResponse
        });
     /* global google */
        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "filled_black", size: "medium", locale:'en-IN' }
        )
    });

    return (
        <div>
            <div id='buttonDiv' ></div>
        </div>
    )
}