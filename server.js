require('dotenv').config() //requiero dotenv que es una librería que configura nuestra app con las 
//variables de entorno definidas en el archivo .env
//dotenv hace q se lea el archivo env, si no lo instalas no te va a leer 
require('./config/database')//requiero mi base de datos.
//los metodos son de petición de http CRUD: 
const Router = require('./routes/routes')//requiero el modulo de las rutas de conexión.
//const Router = require('./routes/routesitineraries')
const express=require('express') //requiero el módulo de express
//express: permite levantar un servidor de node js, ofrece metodos para levantar node js de una manera
// más fácil.

const app = express() //ejecuto express para crear una app.
const cors=require('cors')//requiero cors
app.use(cors())// es un middle de seguridad la app/server usa el metodo cors para obtener permisos de 
//acceso a la base de datos
app.use(express.json()) //ejecuto express para pasar todo a json.
app.use('/api', Router) //la app/server usa las rutas y como intermediario añade a cada endpoint => 
///api ahi tenendriamos la url de la api

const PORT = 4000


app.set('port', PORT)
//set:setea la variable,
app.get('/' , (req, res) => {
    res.send('SERVIDOR CREADO!')
})// get:obtenes la respuesta y a ese response con el metodo send mandas la interaccion 
//entre el back y el front 

app.listen(PORT, () => {
    console.log('SERVIDOR CORRIENDO EN PUERTO: ' +app.get('port'))
})//listen:levanta el servidor 

//api rest es mas q una api 
//middlewe: es un intermediario,
 
 

//cada controlador utiliza un metodo para cada endpoint.
//req es un pedido q se hace desde el front. 
//definicion de variables, try es donde tratas de hacer algo con lo q te esta pidiendo