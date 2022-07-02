const Router = require("express").Router(); //requerimos express q tiene un metodo q es router,
// me permite traer los endpoints.  
//(enlace entre backend y frontend)
const citiesControllers = require("../controllers/citiesControllers");


const { getCities, addCities, removeCity, modifyCity, getOneCity } =
  citiesControllers;
//desestructuro los controladores, para trabajarlos individualmente.

Router.route("/cities")//a router le configuro una ruta
  .get(getCities) //a la ruta le aplico este metodo para asignarle este controlador.
  .post(addCities); //addCities crea añade un modelo.//a la ruta en cuestion le aplico el metodo GET
  // para 
  //asignarle al controlador de lectura/obtención de modelos (cities)
//.metodo(controlador)
Router.route("/cities/:id").delete(removeCity).put(modifyCity).get(getOneCity);//endpoint q toma como 
//parametro el id.
//metodo q va a aplicar a la ruta para asignarle el controlador delete/modify/getonecity,
// LA CUAL REQUIERE COMO PARAMETRO ID,
//y en el caso de modify el body y el id.
const itinerariesControllers = require("../controllers/itinerariesControllers");

const { getItineraries, addItinerary, removeItinerary, modifyItinerary, getOneItinerary, readItineraries } = itinerariesControllers;

Router.route("/itineraries").get(getItineraries).post(addItinerary);

Router.route("/itineraries/:id")
  .delete(removeItinerary)
  .put(modifyItinerary)
  .get(getOneItinerary);

Router.route("/itineraries/city/:id").get(readItineraries)

const {signIn,signUp, verifyMail} = require('../controllers/usersControllers')
const validator = require("../config/validator")

Router.route('/auth/signUp')
.post(validator, signUp)
//validator
Router.route('/auth/signIn')
.post(signIn)
Router.route('/verify/:string')
.get(verifyMail)



module.exports = Router; //exporto el modulo para requerir las rutas en server, para poder conectrme 
//con ellas a la base de datos.

//get city agregamos a detalles.
//
