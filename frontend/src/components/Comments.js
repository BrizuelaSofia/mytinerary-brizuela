import React from 'react'
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import itinerariesActions from '../redux/actions/itinerariesActions'
import commentsActions from '../redux/actions/commentsActions'


function Comments ({props}) {
   console.log(props)

  
//hace mucho no guardo 
    const dispatch = useDispatch()
    const [itinerary, setItinerary] = useState();
    const [text, setText] = useState("");//captura lo q se graba en el input
    const [modify, setModify] = useState(""); //captura la modificacion.
    const [reload, setReload] = useState(false);
  //tengo q tomar el estado o la props del data? hiciste con useState? entonces es mi prop
//no creo q funcione igual jajsjaja pq sigo teniendo cosas de antes ese useSelector, el dispatch q comente q traia el itinerario

    
    const user = useSelector(store => store.userReducers.user)
    console.log(user)
    
    // useEffect(() => {
    //     async function comments() {
    //         const res = await dispatch(itinerariesActions.getOneItinerary(props._id));
    //         console.log(res)
    //         setItinerary(res.response) //no vi estos dos, esta bien? o trajeron algo mas
    //         return res 
    //     };
    //     comments()
    // }, [reload])


    async function toAdd() {
        const comment = {
            itinerary: props._id,
            comment: text
        }//del body obtenemos comment, el texto

      

       
       const res = await dispatch(commentsActions.addComment(comment))
            
        setReload(!reload)
        setText("")
    } 
  
    async function modifyComment(comment) {
        const commentData = {
            comment:modify
        } 
        const commentId = comment._id
        //del body obtenemos comment, el texto
       const res = await dispatch(commentsActions.modifyComment(commentId,commentData))
        setReload(!reload) 
    } 
    return ( //no funciona modify es como q me crea otro comentario si funciona
        <>
        <div> 
          <div  style={{marginBottom:"1rem"}}>Comentarios</div> 
          {props.comments?.map((comment, index)=> 
          <> 
          <div key={index} contentEditable suppressContentEditableWarning={true} onInput={(event) => setModify(event.currentTarget.textContent)}   type="text-area">{ comment.comment} </div>
         
         <div>
          <button  className='modify' onClick={()=>modifyComment(comment)}>modify</button> 
          <button  className='delete'>delete</button>    
         </div>
         </>
         
         
    
            
             )}       
          <div contentEditable suppressContentEditableWarning={true} value={text} onInput={(event) => setText(event.currentTarget.textContent)}   type="text-area"> </div>  
          <div>
            <button className='add' onClick={toAdd}>add comment</button>
   
          </div>
          
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