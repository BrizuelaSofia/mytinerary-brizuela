
import { useParams } from "react-router-dom";
//import { Link as LinkRouter } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'

import itinerariesActions from '../redux/actions/itinerariesActions'
import * as React from 'react';
import Itinerary from './Itinerary'

//import citiesActions from '../redux/actions/citiesActions'

export default function Detail() {
  const { id } = useParams()
  const dispatch = useDispatch();

  


  useEffect(() => {
    dispatch(itinerariesActions.readItineraries(id))
  }, [id]);

  const itineraries = useSelector((store) => store.itinerariesReducers.itineraries)
//el console log se hace al parametro para ubicar la ruta de la api.

  return (
    <>
    { itineraries.length > 0 ? <Itinerary itineraries={itineraries}/> : <p>no itineraries</p> }
        
      </>
    
  );
}

