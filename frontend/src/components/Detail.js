import React from 'react'
import { useParams } from 'react-router-dom'
import CardDetail from './CardDetail'
import data from './data.json'

export default function Detail(){
 const {id} =useParams()
 
      return(
         
        <div className='tarjetadetalle'> <CardDetail  ciudad={data.filter(ciudad => ciudad.id == Number(id))}  /> </div>
      
      )                             
}
