import React from 'react'
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import itinerariesActions from '../redux/actions/itinerariesActions'
import commentsActions from '../redux/actions/commentsActions'
function Comments ({props}) {

    const dispatch = useDispatch()
    const [itinerary, setItinerary] = useState();
    const [inputText, setInputText] = useState("");//captura lo q se graba en el input
    const [modify, setModify] = useState(); //captura la modificacion.
    const [reload, setReload] = useState(false);
  


    
    const user = useSelector(store => store.userReducers.user)
    console.log(user)
    
    useEffect(() => {
        async function comments() {
            const res = await dispatch(itinerariesActions.getOneItinerary(props._id));
            console.log(res)
            setItinerary(res.response)
            return res
        };
        comments()
    }, [reload])
    console.log(itineraries)

    async function toAdd(event) {
        const commentData = {
            itinerary: itinerary._id,
            comments: {
                comment: inputText,
                userId: user?.id
            }
        }

        
        console.log(inputText)

        console.log(commentData)
        await dispatch(commentsActions.addComment(commentData))
        setInputText("")
        setReload(!reload)
    }

    return (
        <>
        <div>
          <div style={{marginBottom:"1rem"}}>Comentarios</div>
          <div><input onChange={(event) => setInputText(event.target.value)} value={inputText} type="text-area"/></div>  
          <button onClick={toAdd}>botton</button>
        </div>
        </>
        //  {itinerary?.comments.map(comment =>
        //     <>
        //       {comment.userID?._id !== props.user?.id ?
        //         <div className="card cardComments " key={comment._id}>
        //           <div className="card-header cardHeader">
        //             <p>{comment.userID.fullName}</p> <p>{new Date(comment.date).toUTCString()}</p>
        //           </div>
        //           <div className="card-body">
        //             <p className="card-text cardText">{comment.comment}</p>
        //           </div>
        //         </div> :

        //         <div className="card cardComments">
        //           <div className="card-header cardHeader">
        //             <p>{comment.userID.fullName}</p> <p>{new Date(comment.date).toUTCString()}</p>
        //           </div>
        //           <div className="card-body ">

        //             <div type="text" className="card-text textComments" onInput={(event) => setModifi(event.currentTarget.textContent)} contentEditable >{comment.comment}</div>
        //             <button id={comment._id} onClick={modificarComentario} className="btn btn-primary btnComments">Modificar</button>
        //             <button id={comment._id} onClick={eliminarComentario} className="btn btn-primary btnComments">Eliminar</button>
        //           </div>
        //         </div>
        //       }
        //     </>
        //   )}
    )
}
export default Comments