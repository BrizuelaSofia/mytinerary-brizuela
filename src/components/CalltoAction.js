import React from 'react'
import Button from '@mui/material/Button';
import {Link as LinkRouterr} from 'react-router-dom';


function CalltoAction() {
    return ( 
        <>  <LinkRouterr to={'/PagVacia'}>
              <Button className="learn-more"> Get Started
              </Button>
            </LinkRouterr>
        </>
       
    )
}
export default CalltoAction 