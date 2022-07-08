
import { useParams } from "react-router-dom";
//import { Link as LinkRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import {Link as LinkRouterr} from 'react-router-dom';

import itinerariesActions from '../redux/actions/itinerariesActions'
import * as React from 'react';
import Itinerary from './Itinerary'

//import citiesActions from '../redux/actions/citiesActions'

export default function Detail() {
  const { id } = useParams()
  const dispatch = useDispatch();




  useEffect(() => {
    dispatch(itinerariesActions.readItineraries(id))
    //eslint-disable-next-line     
  }, [id]);

  const itineraries = useSelector((store) => store.itinerariesReducers.itineraries)
  //el console log se hace al parametro para ubicar la ruta de la api.

  return (
    <div className="fondo">
    
    <LinkRouterr to={'/Cities'}>
              <Button className="learn-more botonback"> Back to cities
              </Button>
            </LinkRouterr>
   
    
      { itineraries.length > 0 ? itineraries.map(itinerary =>{
        return (
          <Itinerary key={itinerary._id} data={itinerary} className="card-itinerary" />
        )
      })  : <p className="noitineraries">no itineraries</p> }

      
    </div>


  );
}

