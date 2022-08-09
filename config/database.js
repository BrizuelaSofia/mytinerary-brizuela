//mongoose: libreria q sirve para conectarme y trabajar con mongo.
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{ 
//utilizo el método connect de mongoose que requiere dos parámetros(la uri de conexion y un objeto con dos propiedades)
//por medio de process.env (permite conectar con la variable de entorno).


    useUnifiedTopology:true, //le dice a Moongose q habilite para usar el ultimo motor de mongo como predeterminado
    useNewUrlParser: true,  //si el useUnifiedTopology que se desconecte o use el anterior.
}
)

//intento de establecer la conexión.
.then(() =>console.log("Database conected")) 
.catch(err => console.error(err))

//VARIABLE DE ENTORNO: valores q contienen informacion del programa.







