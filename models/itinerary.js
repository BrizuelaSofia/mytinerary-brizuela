const mongoose = require('mongoose')
//MONGOOSE
//libreria que permite una conexion entre la app y la base de datos escribir 
//consultas  de mongoDB
const itinerarySchema = new mongoose.Schema({
     nombreitinerario:{type:String, require:true},
     autoritinerario:{type:String, require:true},
     autorimagen:{type:String, require},
     precio:{type:String, require:true},
     duracion: {type:String, require:true},  
     etiquetas: {type:String, require:true},
     likes: {type:String, require:true},
    cityid:{type: mongoose.Types.ObjectId, ref:"cities"}
})

const Itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports = Itinerary 
/*{"data":{

            "autoritinerario": "New York, City of Dreams",
            "autorimagen": "https://awsimages.detik.net.id/community/media/visual/2021/07/16/john-mayer.jpeg?w=700&q=90",
            "nombrepersona": "John Mayer",
            "precio": "💵💵💵💵💵",
            "duracion": "6hrs",
            "etiquetas": "#concert  #NYC  #missliberty ",
            "likes": "0",
            "cityid":""
}} */