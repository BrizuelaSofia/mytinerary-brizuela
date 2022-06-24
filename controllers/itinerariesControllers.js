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
      itineraries = await Itinerary.find().populate("cityid")
      console.log(Itinerary);
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : { itineraries },
      success: error ? false : true,
      error: error,
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
      itinerary = await Itinerary.findOne({ _id: id });
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
        itineraries= await Itinerary.find({cityid:id})
        .populate("cityid")
    }catch (err) {
        error = err
    }
    res.json({
        response: error ? 'ERROR' : itineraries,
        success: error ? false : true,
        error: error
})
}
}

module.exports = itinerariesControllers;
