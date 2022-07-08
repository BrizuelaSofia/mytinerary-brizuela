import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from "@mui/material/CardMedia";
import LikesButton from './LikesButton';
import Comments from './Comments';
// import {useDispatch, useSelector} from "react-redux";
// import itinerariesActions from '../redux/actions/itinerariesActions'

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

export default function Itinerary({ data }) {
  // const dispatch = useDispatch()
  // const [likes, setLikes] =React.useState()

  console.log(data)

  // async function likesDislikes() {
  //  const res = await dispatch(itinerariesActions.likeDislike(data._id));
  //   console.log(res)

  // }  

  // const user=useSelector(store=>store.userReducers.user)
  // console.log(user)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>

     
          <div>
            <Card className="card-itinerary" sx={{ width: 500, m:11 }} >
              <h1 className='textItinerary'> {data.nombreitinerario}</h1>
              <CardHeader

                avatar={
                  <Avatar className='avatar' src={data.autorimagen} />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />


                  </IconButton>
                }

                title={data.autoritinerario}

              />

              <CardContent>
                <div variant="body2" color="text.secondary" className='formatoItinerary'>
                  <p className='h5'>{data.precio}</p>
                  <p className='h5'>{data.duracion}</p>
                  <p className='h5'>{data.etiquetas}</p>
                </div>
              </CardContent>
              <CardActions disableSpacing>
               <LikesButton  props={data}/> 
                <IconButton aria-label="add to favorites" >
                  <FavoriteIcon sx={{ textShadow:'red' }} />
                </IconButton>
                <Comments  props={data} /> 

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
                  {data.activities.map((act) => {
                    return ( 
                    <div key={act._id}>
                      <div>
                        <CardMedia component="img" height="100%"
                        image={act.imageActivity} alt="activity" />
                        <div>
                          <h3>{act.nameActivity}</h3>
                        </div>
                      </div>
                      </div> 
                      )
                  })}
                 

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

        

     
    </>


  );
}
