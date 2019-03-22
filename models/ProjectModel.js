'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//ESQUEMA DE LA BD
let projectSchema =Schema({
    nombre:String,
    apellido:String,
    ciudad:String,
    edad:Number,
    fruta:String
});
//Mongoose.model('nombre coleccion', "esquema coleccion") todo de la bd
module.exports= mongoose.model('cusro',projectSchema);