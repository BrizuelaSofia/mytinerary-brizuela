const Activity= require("../models/activity"); 

const activitiesControllers = {
  addActivity: async (req, res) => {
    const { nameActivity, imageActivity} = req.body.data;
    let activity;
    let error = null;
    try {
      activity = await new Activity({
        nameActivity: nameActivity,
        imageActivity: imageActivity,
      
      
      }).save();
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : activity,
      success: error ? false : true,
      error: error,
    });
  },


  getActivities: async (req, res) => {
    let activities;
    let error = null;
    try {
      activities = await Activity.find()
     
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : { activities },
      success: error ? false : true,
      error: error,
    });
  },


  removeActivity: async (req, res) => {
    const id = req.params.id;
    let activity;
    let error = null;
    try {
      activity = await Activity.findOneAndDelete({ _id: id });
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : activity,
      success: error ? false : true,
      error: error,
    });
  },


  modifyActivity: async (req, res) => {
    const id = req.params.id;
    const activity = req.body.data;
    let activitydb;
    let error = null;
    try {
      activitydb = await Activity.findOneAndUpdate({ _id: id }, activity, {
        new: true,
      }); //new:true nos va a devolver el nuevo valor del objeto.
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : activitydb,
      success: error ? false : true,
      error: error,
    });
  },

  getOneActivity: async (req, res) => {
    const id = req.params.id;
    let activity;
    let error = null;
    try {
      activity = await Activity.findOne({ _id: id });
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : { activity },
      success: error ? false : true,
      error: error,
    });
  },

}
//   findActFromIti: async (req,res)=>{
//     const id= req.params.id
//     let activities
//     let error= null
//     try{
//        activities= await Activity.find({itineraryid:id})
//         .populate("itineraryid")
//     }catch (err) {
//         error = err
//     }
//     res.json({
//         response: error ? 'ERROR' : activities,
//         success: error ? false : true,
//         error: error
// })
// }
module.exports = activitiesControllers;