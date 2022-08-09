const mongoose = require('mongoose')
const citySchema = new mongoose.Schema({
     nombreciudad:{type:String, require:true},
     nombrepais:{type:String, require:true},
     descripcion:{type:String, require:true},
     imagenUrl: {type:String, require:true},   
})

//Schema: palabra reservada, crea un esquema y guarda la info de la colección(cities)
const City = mongoose.model('cities', citySchema)
module.exports = City


