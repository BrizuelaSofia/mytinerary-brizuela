import React from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useDispatch, useSelector } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'


export default function Detail() {
  const { id } = useParams()
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(citiesActions.getOneCity(id))
  }, [id]);

  const city = useSelector((store) => store.citiesReducers.oneCity)
//el console log se hace al parametro para ubicar la ruta de la api.
  return (
    <div className="tarjetadetalle ">
      <Card sx={{ maxWidth: 345 }} key={city._id}>
        <CardMedia
          component="img"
          height="140"
          image={city.imagenUrl}
          alt="Romantic-City"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {city.nombreciudad}
          </Typography>
          <Typography>{city.nombrepais}</Typography>
          <Typography variant="body2" color="text.secondary">
            {city.descripcion}
          </Typography>
          <CardActions>
            <LinkRouter key={city.id} to={"/Cities"}>
              <Button size="small">back</Button>
            </LinkRouter>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
