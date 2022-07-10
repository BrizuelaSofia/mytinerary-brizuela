import React from 'react'
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Typography from '@mui/material/Typography';
import itinerariesActions from '../redux/actions/itinerariesActions'
import toast from 'react-hot-toast';
// import '../style/style.css'


function LikesButton({props}) {
    // console.log(props)
    const [likes,setLikes] = useState([])
     console.log(likes)
    const [reload,setReload] = useState(false)
    const userState = useSelector(store => store.userReducers.user)
     console.log(userState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(itinerariesActions.getOneItinerary(props._id))
        .then(response => setLikes(response.itinerary.likes))
        // eslint-disable-next-line
          
    }, [!reload]) //COPIO Y PEGO Y HAGO ESTO Y EL SETLIKES SERIA SET COMMENT
    console.log(likes) //aca me funcionaba y creo q es lo mismo //lees ahi? donde meto el console.log para verlo

    async function likesOrDislikes() {
   const res =   await dispatch(itinerariesActions.likeDislike(props._id))
        setReload(!reload)
        console.log(res)
                
       
   
    }


     console.log(likes)
    return (  
        <>
            {userState ?
                <IconButton onClick={likesOrDislikes} aria-label="add to favorites">
                {likes?.includes(userState.id) ?
                    <FavoriteIcon/>
                    :
                    <FavoriteBorderIcon/>}
                    <Typography>{likes?.length} likes</Typography>
                </IconButton>
                :
                 <IconButton aria-label="add to favorites">
                     <FavoriteBorderIcon/>
                 <Typography>{likes?.length} likes</Typography> 
                 </IconButton>
            }
        </>
    )
}

export default LikesButton