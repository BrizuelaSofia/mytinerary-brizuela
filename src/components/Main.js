import React from 'react'
import '../styles/styles.css'
import Typography from '@mui/material/Typography';
//los parrafos y los textos en mui son un componente typography, por eso hay q importarlo y luego usarlo
function Main(){
     
    return(
        <Typography className='main'>HOLA, SOY EL COMPONENTE MAIN</Typography>
    )
}

export default Main