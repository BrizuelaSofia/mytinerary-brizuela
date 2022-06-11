import React from "react";
import "../styles/styles.css";
import { Link as LinkRouter } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CardCiudades({ filtrado }) {
  return filtrado.map((cadaCiudad) => {
    return (
      <Card sx={{ maxWidth: 345 }} key={cadaCiudad.id}>
        <CardMedia 
          component="img"
          height="140"
          image={cadaCiudad.imagen}
          alt="Romantic-City"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cadaCiudad.ciudad}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <LinkRouter key={cadaCiudad.id} to={`/City/${cadaCiudad.id}`}>
            <Button size="small">Detail</Button>
          </LinkRouter>
        </CardActions>
      </Card>
    );
  });
}
export default CardCiudades;
