//requiero express/me permite traer los endpoints.(enlace entre backend y frontend) 
const Router = require("express").Router(); 
const passport = require('../config/passport')
const citiesControllers = require("../controllers/citiesControllers");

//desestructuro controladores, para trabajarlos individualmente.
const { getCities, addCities, removeCity, modifyCity, getOneCity } =
  citiesControllers;


//configuración de rutas
Router.route("/cities")
  //aplicación de un método para asignarle este controlador
  .get(getCities)
  .post(addCities);
  //.metodo(controlador)


//endpoint que toma como parametro el id.
Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);

const itinerariesControllers = require("../controllers/itinerariesControllers");
const { getItineraries, addItinerary, removeItinerary, modifyItinerary, getOneItinerary, readItineraries, likeDislike } = itinerariesControllers;

Router.route("/itineraries").get(getItineraries).post(addItinerary);

Router.route("/itineraries/:id")
  .delete(removeItinerary)
  .put(modifyItinerary)
  .get(getOneItinerary);

Router.route("/itineraries/city/:id").get(readItineraries)
Router.route("/like/:id").put(passport.authenticate("jwt", { session: false }), likeDislike);

const { signIn, signUp, verifyMail, verifyToken } = require('../controllers/usersControllers')
const validator = require('../config/validator')


Router.route('/auth/signUp')
  .post(validator, signUp)
Router.route('/auth/signIn')
  .post(signIn)
Router.route('/verify/:string')
  .get(verifyMail)
Router.route('/auth/loginToken')
  .get(passport.authenticate('jwt', { session: false }), verifyToken)

const { getActivities, addActivity, removeActivity, modifyActivity, getOneActivity } = require('../controllers/activitiesControllers')

Router.route('/activities')
  .get(getActivities)
  .post(addActivity)
Router.route('/activities/:id')
  .get(getOneActivity)
  .put(modifyActivity)
  .delete(removeActivity)

const { addComment, deleteComment, modifyComment } = require('../controllers/commentsControllers')

Router.route('/itineraries/comment')
  .post(passport.authenticate('jwt', { session: false }), addComment)
Router.route('/itineraries/comment/:id')
  .post(passport.authenticate('jwt', { session: false }), deleteComment)
  .put(passport.authenticate('jwt', { session: false }), modifyComment)


module.exports = Router;
//exporto el modulo para requerir las rutas en server, para conectarlas a la bd.


