import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Itinerary({ itineraries }) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>

      {itineraries.map( itinerary => {
        return (
          <div>
            <Card className="card-itinerary" sx={{ width: 300, m:23 }}  key={itinerary._id}>
              <h1 className='textItinerary'> {itinerary.nombreitinerario}</h1>
              <CardHeader

                avatar={
                  <Avatar className='avatar' src={itinerary.autorimagen} />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }

                title={itinerary.autoritinerario}

              />

              <CardContent>
                <Typography variant="body2" color="text.secondary" className='formatoItinerary'>
                  <h5>{itinerary.precio}</h5>
                  <h5 className=''>{itinerary.duracion}</h5>
                  <h5>{itinerary.etiquetas}</h5>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon sx={{ color: 'red' }} />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography>
                    Coming soon🛠
                  </Typography>

              {/* <div className='activities'>
                  <img className='activity' src={itinerary.autorimagen}
                />
                   <img className='activity' src={itinerary.autorimagen}
                />
                   <img className='activity' src={itinerary.autorimagen}
                />
              </div> */}
                 

                </CardContent>
              </Collapse>
            </Card>
          </div>

        )

      })}
    </>


  );
}
