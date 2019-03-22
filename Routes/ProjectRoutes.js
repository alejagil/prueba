'use strict'
let express =require('express');
//importo controlador projects
let ProjectControllers = require('../controllers/ProjectController');
//metodo router de express
let router = express.Router();
//Se crea una ruta por get 
router.get('/home',ProjectControllers.home);
//se crea una nueva ruta
router.post('/test',ProjectControllers.test);
router.post('/inicio',ProjectControllers.inicio);
router.post('/saveProject',ProjectControllers.saveProject);

module.exports = router;