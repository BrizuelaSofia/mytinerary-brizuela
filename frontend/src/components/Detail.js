import React from 'react'
import { useParams } from 'react-router-dom'
import CardDetail from '../components/CardDetail'
import data from '../components/data.json'

export default function Detail(){
   const {id} =useParams()
      return(
        
       <CardDetail  ciudad={data.filter(ciudad => ciudad.id == Number(id))} />
      )
}
