import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


 


function CardDetail({ciudad}){
    return(
        <Card sx={{ maxWidth: 345  }} key={ciudad.id} >
        <CardMedia 
          component="img"
          height="140"
          image={ciudad[0].imagen}
          alt="Romantic-City"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ciudad[0].ciudad}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        
      </Card>    
    )
}
export default CardDetail