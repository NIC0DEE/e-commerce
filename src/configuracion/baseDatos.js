const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const conectarBD = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{ //Usa mongoose.connect para conectarse a la base de datos MongoDB.
            useNewUrlParser : true, // Utiliza el nuevo sistema de análisis de URLs de MongoDB para una mejor compatibilidad
            useUnifiedTopology : true //  Activa el nuevo motor de administración de conexiones de MongoDB, que mejora el manejo de las conexiones y el rendimiento.
        })
    }catch(error){
        console.error('Error en la conexion a MongoDB: ',error)
        process.exit(1) //indicando un cierre con error.
    }
}

module.exports = conectarBD