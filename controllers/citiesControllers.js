const City = require('../models/cities') //importamos nuestro modelo de cities.

const citiesControllers ={
    addCities: async(req, res) => {
        const { nombreciudad, nombrepais, descripcion, imagenUrl } = req.body.data
        let city
        let error =null
        try{
            city= await new City({ 
                nombreciudad: nombreciudad,
                nombrepais: nombrepais,
                descripcion: descripcion, 
                imagenUrl : imagenUrl
            }).save()

        }catch(err){error = err}
        res.json({
            response: error ? 'ERROR' : city,
            success:error ? false : true,
            error:error
        })
    },

   getCities: async (req, res) => {
    let cities
    let error =null
    try {
        cities = await City.find()
        console.log(City)

    } catch (err) { error = err }
    res.json({
        response:error? 'ERROR' : { cities },
        success: error? false : true,
        error: error
    }) 
   },
   removeCity: async (req, res) => {
    const id = req.params.id
    let city
    let error = null
    try {
        city = await City.findOneAndDelete({ _id: id })
    } catch (err) {
        error = err
    }
    res.json({
        response: error ? 'ERROR' : city,
        success: error ? false : true,
        error: error
    })
},
modifyCity: async (req, res) => {
    const id = req.params.id
    const city = req.body.data
    let citydb
    let error = null
    try {
        citydb = await City.findOneAndUpdate({ _id: id }, city, { new: true })
    } catch (err) {
        error = err
    }
    res.json({
        response: error ? 'ERROR' : citydb,
        success: error ? false : true,
        error: error
    })
},
getOneCity: async (req, res) => {
    const id = req.params.id
    let city
    let error = null
    try {
        city = await City.findOne({ _id: id })
    } catch (err) {
        error = err
    }
    res.json({
        response: error ? 'ERROR' : { city },
        success: error ? false : true,
        error: error
    })
},



}

module.exports = citiesControllers  //exporto el modulo para utilizarlo en las rutas.