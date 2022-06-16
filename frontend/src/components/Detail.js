import React from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

export default function Detail() {
  const { id } = useParams();

  const [ciudad, setCiudad] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities/" + id)
      .then((response) => setCiudad(response.data.response.city)); 
  }, []);
//el console log se hace al parametro para ubicar la ruta de la api.
  return (
    <div className="tarjetadetalle ">
      <Card sx={{ maxWidth: 345 }} key={ciudad._id}>
        <CardMedia
          component="img"
          height="140"
          image={ciudad.imagenUrl}
          alt="Romantic-City"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ciudad.nombreciudad}
          </Typography>
          <Typography>{ciudad.nombrepais}</Typography>
          <Typography variant="body2" color="text.secondary">
            {ciudad.descripcion}
          </Typography>
          <CardActions>
            <LinkRouter key={ciudad.id} to={"/Cities"}>
              <Button size="small">back</Button>
            </LinkRouter>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
