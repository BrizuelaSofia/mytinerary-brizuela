const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
     nameActivity:{type:String },
     imageActivity:{type:String},
    
  
})

const Activity = mongoose.model('activities', activitySchema)
module.exports = Activity
