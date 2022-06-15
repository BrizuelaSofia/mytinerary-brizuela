const Router = require('express').Router() //me permite traer los endpoints.  (enlace entre backend y frontend)
const citiesControllers = require('../controllers/citiesControllers')

const {getCities, addCities, removeCity, modifyCity, getOneCity } = citiesControllers
//desestructuro los controladores.

Router.route('/cities').get(getCities) //a router le configuro una ruta
.post(addCities) //a la ruta en cuestion le aplico el metodo GET para asignarle al controlador de lectura/obtención de modelos (cities)
//.metodo(controlador)
Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

module.exports= Router //exporto el modulo para requerir las rutas en server, para poder conectrme con ellas a la base de datos.

//get ecity agregamos a detalles.
//mongoose lo uso para conectar nuestro servidor a la base de datos de mongo.