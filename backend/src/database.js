// requiere el modulo de conexion a mongodb
const mongoose = require("mongoose");

// valida si fue definida URI sino define una de pruebas.
const URI = process.env.MONGODB_URI || 'mongodb://localhost/testdb';
const PORT = process.env.MONGODB_PORT;

// archivo de configuracion
const config = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}; 

mongoose.connect(URI, config)
.then(db => console.log('Database connected on port', PORT))
.catch(err => console.error(err));

