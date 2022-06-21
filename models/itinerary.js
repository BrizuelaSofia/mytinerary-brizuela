const mongoose = require('mongoose')
//MONGOOSE
//libreria que permite una conexion entre la app y la base de datos escribir 
//consultas  de mongoDB
const itinerarySchema = new mongoose.Schema({
     nombreitinerario:{type:String, require:true},
     personaitinerario:{type:String, require:true},
     nombrepersona:{type:String, require},
     precio:{type:Number, require:true},
     duracion: {type:Number, require:true},  
     etiquetas: {type:String, require:true},
     likes: {type:Number, require:true},
     actividades:  {type:Array, require:true}
})

//const Itinerary = mongoose.model('itineraries', itinerarySchema)
//module.exports = Itinerary (NO CREAR LA COLECCIÓN AÚN).