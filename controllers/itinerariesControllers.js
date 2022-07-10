const Itinerary = require("../models/itinerary"); //importamos nuestro modelo de cities.

const itinerariesControllers = {
  addItinerary: async (req, res) => {
    const { 
      nombreitinerario, 
      autoritinerario,
      autorimagen,
      precio,
      duracion,
      etiquetas,
      likes,
      activities,
      comments,
      cityid
     
    } = req.body.data;
    let itinerary;
    let error = null;
    try {
      itinerary = await new Itinerary({
        nombreitinerario: nombreitinerario,
        autoritinerario: autoritinerario,
        autorimagen: autorimagen,
        precio: precio,
        duracion: duracion,
        etiquetas: etiquetas,
        likes: likes,
        activities:activities,
        comments:comments,
        cityid: cityid
      
      }).save();
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : itinerary,
      success: error ? false : true,
      error: error,
    });
  },


  getItineraries: async (req, res) => {
    let itineraries;
    let error = null;
    try {
      itineraries = await Itinerary.find().populate("cityid").populate("comments.userId")
      // console.log(Itinerary);
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : { itineraries },
      success: error ? false : true,
      error: error,
      console:console.log(error)
    });
  }, //no puede haber algo mal aca, no tocamos nada, estuvimos en rutas pero comentaba
  //no tira ni el error del nombre



  removeItinerary: async (req, res) => {
    const id = req.params.id;
    let itinerary;
    let error = null;
    try {
      itinerary = await Itinerary.findOneAndDelete({ _id: id });
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : itinerary,
      success: error ? false : true,
      error: error,
    });
  },


  modifyItinerary: async (req, res) => {
    const id = req.params.id;
    const itinerary = req.body.data;
    let itinerarydb;
    let error = null;
    try {
      itinerarydb = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, {
        new: true,
      }); //new:true nos va a devolver el nuevo valor del objeto.
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : itinerarydb,
      success: error ? false : true,
      error: error,
    });
  },

  getOneItinerary: async (req, res) => {
    const id = req.params.id;
    let itinerary;
    let error = null;
    try {
      itinerary = await Itinerary.findOne({ _id: id }).populate("comments.userId");
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : { itinerary },
      success: error ? false : true,
      error: error,
    });
  },
  readItineraries: async (req,res)=>{
    const id= req.params.id
    let itineraries
    let error= null
    try{
        itineraries= await Itinerary.find({cityid:id}).populate("activities")
        
    }catch (err) {
        error = err
    }
    res.json({
        response: error ? 'ERROR' : itineraries,
        success: error ? false : true,
        error: error
})
},
likeDislike: async (req,res) => {
  //console.log(req)
  let id = req.params.id //id del itinerario, donde queremos poner o sacar el like. llega por parametro desde axios
  console.log(id)
  let user = req.user.id //id del usuario q sale de la respuesta por passport 
  console.log(user)
  try { 
       let itinerary = await Itinerary.findOne({_id:id}) //buscamos un itinerario en donde el object id sea igual al id q pasamos por parametro
     

      if (itinerary.likes.includes(user)) { //de este itinerario encontrado buscamos la propiedad like y si esa propiedad incluye el usuario
        //si encontramos el itinerario lo actualizamos.
         Itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:user}}, {new:true}) //extraemos de like el usuario y devolvemos el nuevo dato
              .then(response => res.json({
                  response: response.likes, 
                  success: true,
                  message: "dislike :("
              }))
              .catch(error => console.log(error))
      } else { //en el caso en q no este el id del usuario dentro del array de likes hace lo mismo pero utilizando push (agrega el usuario)
          Itinerary.findOneAndUpdate({_id:id}, {$push:{likes:user}}, {new:true})
              .then(response => res.json({
                  response: response.likes, 
                  success: true,
                  message: "Thanks for your like!"
              }))
              .catch(error => console.log(error))
      }
  } catch (error) {
      res.json({
          response: error,
          success: false
      })
  } 
},
// likeDislike: async (req,res) => {
//   //console.log(req)
//   let itineraryId = req.params.id // llega por parametro desde axios
//   console.log(itineraryId)
//   let user = req.user.id //llega por respuesta de passport
//   // console.log("Console de USER")
//   // console.log(user)
//   try { 
//       let itinerary = await Itinerary.findOne({_id:itineraryId})
//       if (itinerary.likes.includes(user)) {
//           Itinerary.findOneAndUpdate({_id:itineraryId}, {$pull:{likes:user}}, {new:true})
//               .then(response => res.json({
//                   response: response.likes, 
//                   success: true
//               }))
//               .catch(error => console.log(error))
//       } else {
//           Itinerary.findOneAndUpdate({_id:itineraryId}, {$push:{likes:user}}, {new:true})
//               .then(response => res.json({
//                   response: response.likes, 
//                   success: true
//               }))
//               .catch(error => console.log(error))
//       }
//   } catch (error) {
//       res.json({
//           response: error,
//           success: false
//       })
//   } 
// }
}

module.exports = itinerariesControllers;
