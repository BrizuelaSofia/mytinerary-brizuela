//const City = require("../models/cities"); //importamos nuestro modelo de cities.

const citiesControllers = {
  addCities: async (req, res) => {
    const { nombreciudad, nombrepais, descripcion, imagenUrl } = req.body.data; 
    let city;
    let error = null;
    try {
      city = await new City({
        nombreciudad: nombreciudad,
        nombrepais: nombrepais,
        descripcion: descripcion,
        imagenUrl: imagenUrl,
      }).save();
    } catch (err) {
      error = err;
    }
    res.json({

















      
      response: error ? "ERROR" : city,
      success: error ? false : true,
      error: error,
    });
  },

  getCities: async (req, res) => {
    let cities;
    let error = null;
    try { //el metodo find acciona como filtro si no le envio un parametro
      //para q realice ese filtro, me va a devolver todos los datos 
      //de la coleccion.
      cities = await City.find();
      console.log(City);
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : { cities },
      success: error ? false : true,
      error: error,
    });
  },
  removeCity: async (req, res) => {
    const id = req.params.id;
    let city;
    let error = null;
    try { //findoneanddelete es un metodo de mongoose q me permite 
    // eliminar un modelo

      city = await City.findOneAndDelete({ _id: id });
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : city,
      success: error ? false : true,
      error: error,
    });
  },
  modifyCity: async (req, res) => {
    //va a recibir datos mediante params, para buscar la ciudad en la base de datos
    //y mediante body ya q le queremos enviar los nuevos valores del objeto.
    const id = req.params.id; //te vas al archivo rutas y te fijas, pq al final de la ruta de la url en esos :id 
    const city = req.body.data;
    let citydb;//trata de meter 
    let error = null;
    try { //findoneandupdate metodo de mongoose q permite modificar un modelo.
      citydb = await City.findOneAndUpdate({ _id: id }, city, { new: true }); //new:true nos va a devolver el nuevo valor del objeto.
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : citydb,
      success: error ? false : true,
      error: error,
    });
  },
  //con getonecyty obtendremos los datos de una ciudad de acuerdo al criterio q elijamos,
//incorporamos el required y en la constante id vamos  a enviarle el id de la ciudad q queremos obtener
//medinte parametro al controlador.
//y el find one funciona como un filtro, aca le estamos pidiendo  q busque un object id de la colección, 
//q tiene q ser igual
//al id mandado por parametro al controlador
  getOneCity: async (req, res) => {

    const id = req.params.id;
    let city;
    let error = null; //find one es metodo de mongoose q me permite 
    //obtener un modelo //encontrar el id q sea igual a mi ciudad.
    try {//establezco la conexion entre id object q es el q me crea postman con mi id
      city = await City.findOne({ _id: id });
    } catch (err) {
      error = err;
    }
    res.json({
      response: error ? "ERROR" : { city },
      success: error ? false : true,
      error: error,
    });
  },
};

module.exports = citiesControllers; //exporto el modulo para utilizarlo en las rutas.
