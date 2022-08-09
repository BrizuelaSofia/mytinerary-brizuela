const Itinerary = require("../models/itinerary");
//importo modelo.

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
        activities: activities,
        comments: comments,
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
      console: console.log(error)
    });
  },



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
      });
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



  readItineraries: async (req, res) => {
    const id = req.params.id
    let itineraries
    let error = null
    try {
      itineraries = await Itinerary.find({ cityid: id }).populate("activities")

    } catch (err) {
      error = err
    }
    res.json({
      response: error ? 'ERROR' : itineraries,
      success: error ? false : true,
      error: error
    })
  },


  
  likeDislike: async (req, res) => {
    //console.log(req)
    //id del itinerario, llega por parametro desde axios
    //id del usuario q sale de la respuesta por passport 
    //console.log(id)
    let id = req.params.id
    let user = req.user.id
    //console.log(user)
    try {
      let itinerary = await Itinerary.findOne({ _id: id })
      if (itinerary.likes.includes(user)) {
        //del itinerario encontrado busco la propiedad like y si esa propiedad incluye el usuario
        //si se encuentra el itinerario, se actualiza.
        Itinerary.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })
          //extraer like del usuario y devolver el nuevo dato.
          .then(response => res.json({
            response: response.likes,
            success: true,
            message: "dislike :("
          }))
          .catch(error => console.log(error))
      } else {
        //en el caso en q no se encuentre al usuario dentro del array, lo agrego.
        Itinerary.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })
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

}

module.exports = itinerariesControllers;
