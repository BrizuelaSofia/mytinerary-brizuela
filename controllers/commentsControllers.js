const Itinerary = require("../models/itinerary");

const commentsControllers = {

    addComment: async (req, res) => {
        //console.log('REQ.BODY')
        //console.log(req.body)
        //console.log('REQ.USER')
        //console.log(req.user)
        const {itinerary, comment} = req.body.comment
        const user = req.user._id
        try {
            const newComment = await Itinerary.findOneAndUpdate({_id: itinerary}, {$push: {comments: {comment: comment, userId: user}}}, {new: true}).populate("comments.userId")


            res.json({success: true,
                response: {newComment},
                message: "thanks for comment!"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again please!"})
        }
    },

    modifyComment: async (req, res) => {
        //console.log('REQ.BODY')
        //console.log(req.body)
        //console.log('REQ.USER')
        //console.log(req.user)
        const {comment} = req.body.comment //pido comentario por body y id del comment por params
      //  console.log(req.body.comment) para ver si llegan bien los datos al front.
        const commentId = req.params.id 
        try {
            const newComment = await Itinerary.findOneAndUpdate({"comments._id": commentId}, {$set: {"comments.$.comment": comment}}, {new: true})
            console.log(newComment)
            res.json({success: true,
                response: { newComment },
                message: "the comment has been modified"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "sorry! try again!",
                console: console.log(error)
             })
                
        }
    },

    deleteComment: async (req, res) => {
        //console.log('REQ.PARAMS')
        //console.log(req.params)
        //console.log('REQ.USER')
        //console.log(req.user)
        const id = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Itinerary.findOneAndUpdate({"comments._id": id}, 
            {$pull: {comments: {_id: id}}}, {new: true})
            res.json({success: true,
                response: {deleteComment},
                message: "the comment has been deleted"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "try again!"})
        }
    }
}

module.exports = commentsControllers