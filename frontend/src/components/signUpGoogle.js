import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import usersActions from '../redux/actions/usersActions'



export default function GoogleSignUp({selectCountry}) {
    const dispatch = useDispatch();


    function handleCallbackResponse(response) {
        console.log(response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        dispatch(usersActions.SignUp({
           
              firstName: userObject.given_name,
              lastName:userObject.family_name,
              imageUser:userObject.picture,
              email:userObject.email, 
              country: selectCountry,
              password:userObject.sub, 
              from: 'google'
          
            
        }))
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '305494709717-46bf4uf1902hv4ake8hi9adgs14reb0d.apps.googleusercontent.com',
             
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