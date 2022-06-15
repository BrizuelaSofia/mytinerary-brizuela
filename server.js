require('dotenv').config()
require('./config/database')

const Router = require('./routes/routes')//requiero el modulo de las rutas de conexión.
const express=require('express')
const app = express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use('/api', Router)

const PORT = 4000


app.set('port', PORT)

app.get('/' , (req, res) => {
    res.send('SERVIDOR CREADO!')
})

app.listen(PORT, () => {
    console.log('SERVIDOR CORRIENDO EN PUERTO: ' +app.get('port'))
})

//api rest es mas q una api 