'use strict'
//importacion de biblioteca (Modulos)
let express = require('express');
//let bodyParser = require('body-parser');

//Ejecuto express
let app = express();
//Cargar archivos de rutas
let projectRoutes = require('./Routes/ProjectRoutes');




//Cualquier cosa que llegue de una peticion 
//la convierte en formato Json
app.use(express.json());

//rutas
app.use('/api',projectRoutes);


//exportar modulo 
//lo deja disponible para importarlo en cualquier otro archivo
module.exports = app;

