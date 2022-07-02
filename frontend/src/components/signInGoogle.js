import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import usersActions from '../redux/actions/usersActions'


export default function GoogleSignIn() {
    const dispatch = useDispatch();


    function handleCallbackResponse(response) {
        console.log(response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        dispatch(usersActions.SignIn({         
              firstName: userObject.given_name,
              lastName:userObject.family_name,
              email:userObject.email, 
              country:"Argentina",
              password:userObject.sub, 
              from: 'google'
          
            
        }))
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
            <div id='buttonDiv'></div>
        </div>
    )
}