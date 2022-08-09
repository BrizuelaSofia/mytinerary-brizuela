const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
     firstName:{type:String },
     lastname:{type:String},
     email:{type:String, required:true},
     password:{type:Array, required:true},
     country: {type:String},  
     imageUser:{type:String},
     from: {type:Array},
     uniqueString:{type:String, required:true},
     verification:{type:Boolean, required:true}
  
})

const User = mongoose.model('users', userSchema)
module.exports = User 