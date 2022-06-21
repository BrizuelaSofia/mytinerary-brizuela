const mongoose = require('mongoose')//mongoose: libreria q sirve para conectarme y trabajar con mongo.

mongoose.connect(process.env.MONGO_URI,{ //utilizo el método connect de mongoose que requiere dos parámetros(la uri de conexion y un objeto con dos propiedades)
//por medio del process.env q es una propiedad, te permite conectar con la variable de entorno.
//VARIABLE DE ENTORNO: son valores q contienen informacion del programa, y en nuestro caso es el cluster, q lo guardamos en mongouri

    useUnifiedTopology:true, //le dice a Moongose q habilite para usar el ultimo motor de mongo como predeterminado
    useNewUrlParser: true,  //y este dice q si el topology no funciona se desconecte o use el anterior.
}
)
.then(() =>console.log("Database conected")) //trata de establecer la conección
.catch(err => console.error(err))//y si no puede te cachea el error





//use efect, cuando pones un valor dentro del corchete cambia. con el corchete vacio le estamos diciendo q se renderiza una vez se va a montar cada vez  recarguemos, 
//el estado es como la recarga de la pag.


//pq el use effect se utiliza para inicializar la api y usamos axios para obtener la api entonces en el segundo parametro donde se coloca el estado q queremos actualizar, no ponemos nada pq ese cambio es la pagina.