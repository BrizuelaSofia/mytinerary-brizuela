import React from "react";
import "../styles/styles.css";
import { Link as LinkRouter } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CardCiudades({ filter }) {
  return filter.map((city) => {
    return (
      
        <Card sx={{ width: 350, }} key={city._id} className="cadaCard">
          <CardMedia
            component="img"
            
            height="140"
            image={city.imagenUrl}
            alt="Romantic-City"
          />
          <CardContent>
            <Typography gutterBottom variant="h5"component="div" className="textcities">
              {city.nombreciudad}
            </Typography>
          </CardContent>
          <CardActions>
            <LinkRouter   to={`/City/${city._id}`}>
              <Button size="small">Detail</Button>
            </LinkRouter>
          </CardActions>
        </Card>
   
    );
  });
}
export default CardCiudades;
