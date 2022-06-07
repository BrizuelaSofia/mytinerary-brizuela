
import React from 'react'
import '../styles/styles.css'
import Gallery  from './Carrousel'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

//los parrafos y los textos en mui son un componente typography, por eso hay q importarlo y luego usarlo
function Main(){
     
    return(
    <div className='main'>
 <h1 className='titulo'> My Tinerary</h1>
 <h5>"Find your perfect trip, designed by insiders who know and love their cities!"</h5>
 <Button variant="contained" endIcon={<SendIcon />}>
  GET STARTED
</Button>
 <Gallery></Gallery>


    </div>
       
       
    )
}

export default Main