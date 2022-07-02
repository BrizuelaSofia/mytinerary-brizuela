const mongoose = require('mongoose')
//MONGOOSE
//libreria que permite una conexion entre la app y la base de datos escribir 
//consultas  de mongoDB
const userSchema = new mongoose.Schema({
     firstName:{type:String, },
     lastname:{type:String,},
     email:{type:String, required:true},
     password:{type:Array, required:true},
     country: {type:String, },  
    
     from: {type:Array},
     uniqueString:{type:String, required:true},
     verification:{type:Boolean, required:true}
  
})

const User = mongoose.model('users', userSchema)
module.exports = User 