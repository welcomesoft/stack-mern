// importa las librerias o dependencias necesarias
// crea el servidor de express y lo almacena en app
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


// initializations
const app = express();

// settings
app.set('PORT', process.env.PORT || 4000);



// middlewares
app.use(morgan('dev'));     // muestra que peticiones se solicitan al backend
app.use(cors());            // permite enviar y recibir informacin entre servidores
app.use(express.json());    // permite enviar archivos json.


// routes
app.use(require('./routes/users-routes'));
app.use(require('./routes/notes-routes'));



// exporta el modulo app
module.exports = app;