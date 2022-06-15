const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
     nombreciudad:{type:String, require:true},
     nombrepais:{type:String, require:true},
     descripcion:{type:String, require:true},
     imagenUrl: {type:String, require:true},   
})

const City = mongoose.model('cities', citySchema)
module.exports = City

//Schema: esta palabra reservada crea un esquema y guarda la info de la colección(cities)

//mi coleccion cities se va a crear o en este caso(pq ya esta creada) se va a mostrar cuando se llame por el controlador.