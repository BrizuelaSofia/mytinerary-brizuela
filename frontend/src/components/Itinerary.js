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

     
          <div className='dobleitinerario'>
            <Card className="card-itinerary" sx={{ width:'80%', m:11 }} >
              <h1 className='textItinerary'> {data.nombreitinerario}</h1>
              <CardHeader

                avatar={
                  <div className='autorimagen' > 
                  <Avatar className='avatar'  sx={{height:'5rem'}} src={data.autorimagen}  />
                  <div className='h5'> {data.autoritinerario}</div>
                
                  </div>
                 
                }
               

                

              />

              <CardContent>
               
                <div variant="body2" color="text.secondary" className='formatoItinerary'>
                  <p className='h51'>Price: {data.precio}</p>
                  <p className='h51'>duration: 🕒{data.duracion}</p>
                  <p className='h51'>{data.etiquetas}</p>
                </div>
               
              </CardContent>
              <CardActions disableSpacing>
               <LikesButton  props={data}/> 
              
              

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
                <div className="activitiesTitle" >Activities</div>
                <CardContent >
                
                  {data.activities.map((act) => {
                    return ( 
                    <div key={act._id} >
                      <div className='activities'>
                        <CardMedia  component="img" className='actImage'
                        image={act.imageActivity} alt="activity" />
                      
                          <h4 className='actsName'>{act.nameActivity}</h4>
                       
                      </div>
                      </div> 
                      )
                  })}
                 
             
              {/* <div >
                  <img className='activity' src={itinerary.autorimagen}
                />
                   <img  src={itinerary.autorimagen}
                />
                   <img className='activity' src={itinerary.autorimagen}
                />
              </div> */}
                 

                </CardContent>
                <Comments  props={data} />         
              </Collapse>
            </Card>
          </div>

        

     
    </>


  );
}
