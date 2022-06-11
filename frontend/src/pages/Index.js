
import React from 'react'
import '../styles/styles.css'
import Gallery  from '../components/Carrousel'
import Hero from '../components/Hero'


//los parrafos y los textos en mui son un componente typography, por eso hay q importarlo y luego usarlo
function Index(){ 
     
    return(
      <div className='main'>
        <div  className='fondoherohero'>       
            <Hero/>
         </div>
         
          
          <Gallery></Gallery>
        </div>  
        
    )
}

export default Index