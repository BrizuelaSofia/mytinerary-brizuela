const mongoose = require('mongoose')
const itinerarySchema = new mongoose.Schema({
      nombreitinerario: { type: String, require: true },
      autoritinerario: { type: String, require: true },
      autorimagen: { type: String, require },
      precio: { type: String, require: true },
      duracion: { type: String, require: true },
      etiquetas: { type: String, require: true },
      likes: { type: Array },
      activities: [{ type: mongoose.Types.ObjectId, ref: "activities" }],
      comments: [{
            comment: { type: String },
            userId: { type: mongoose.Types.ObjectId, ref: "users" }

      }],
      cityid: { type: mongoose.Types.ObjectId, ref: "cities" }

})
const Itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports = Itinerary 
