import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import itinerariesActions from '../redux/actions/itinerariesActions'
import commentsActions from '../redux/actions/commentsActions'
import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box";


function Comments({ props }) {
  console.log(props)



  const dispatch = useDispatch()
  // const [delete, setDelete] = useState("");
  const [comments, setComments] = useState();
  const [text, setText] = useState("");//captura lo q se graba en el input
  const [modify, setModify] = useState(""); //captura la modificacion.
  const [reload, setReload] = useState(false);
  //tengo q tomar el estado o la props del data? hiciste con useState? entonces es mi prop
  //no creo q funcione igual jajsjaja pq sigo teniendo cosas de antes ese useSelector, el dispatch q comente q traia el itinerario


  const user = useSelector(store => store.userReducers.user)
  console.log(user)

  useEffect(() => {
    dispatch(itinerariesActions.getOneItinerary(props._id))
      .then(response => setComments(response.itinerary.comments)) // 
    // eslint-disable-next-line
  }, [reload])
  console.log(comments)

  async function toAdd() {
    const comment = {
      itinerary: props._id,
      comment: text
    }//del body obtenemos comment, el texto




    const res = await dispatch(commentsActions.addComment(comment))
    setText("")
    setReload(!reload)


    document.querySelector("#NewComment").textContent = ""
    console.log(res)
  }

  async function modifyComment(comment) {
    const commentData = {
      comment: modify

    }
    const commentId = comment._id
    //del body obtenemos comment, el texto
    const res = await dispatch(commentsActions.modifyComment(commentId, commentData))
    setReload(!reload)
    setModify(res.itinerary)
  }
  async function deleteComment(id) {

    //quedaria asi?
    await dispatch(commentsActions.deleteComment(id))
    setReload(!reload)
  }

  return (
    <>
      <div className='allComments'>
        <div className='titlecoments' style={{ marginBottom: "1rem" }}>Comments</div>
        {comments?.map((comment) => (
          <div key={comment._id}>
     
            <div className='inputandbutton'>
              <div className='nameImageUser'>
                <div className='usercomment'>
                  <Avatar className='avatarComments' sx={{ height: '3rem' }} src={comment?.userId?.imageUser} />
                  <div className='name'>{comment?.userId?.firstName}</div>
                </div>

                <div className='inputComment2'>
                  
                  <div contentEditable suppressContentEditableWarning={true} onInput={(event) => setModify(event.currentTarget.textContent)} className='input-height' type="text-area">
                    <div className='textComment'>{comment.comment}</div>
                  </div>
                </div>
              </div>


              {/* <div key={index} contentEditable suppressContentEditableWarning={true} onInput={(event) => setDelete(event.currentTarget.textContent)}   type="text-area">{ comment.comment} </div> */}

              {comment.userId?._id === user?.id ? (
                <div className='commentsbutton'>
                  <button className='modify' onClick={() => modifyComment(comment)}><span className="material-symbols-outlined">edit_document</span></button>
                  <button className='delete' onClick={() => deleteComment(comment._id)}><span className="material-symbols-outlined">delete</span></button>
                </div>) : null}
            </div>
          </div>
        ))}

        {user ?
          <div className='inputandbutton'>
            <div className='inputComment'>
              <div className='textComment' id='NewComment' contentEditable suppressContentEditableWarning={true} value={text} onInput={(event) => setText(event.currentTarget.textContent)} type="text-area"> </div>

            </div>
            <div>
              <button className='add' onClick={toAdd}>
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
          :
          <Box>
            <Paper sx={{
              my: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: '#2a9d9026',
              height: 40
            }}>

              <Typography sx={{ fontWeight: "bold", color:'white' }}>Please, login to leave a comment</Typography>
            </Paper>
          </Box>
        }
      </div>
    </>
  )
}
export default Comments
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
