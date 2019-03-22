'use strict'
//se crea un objeto de tipo json
let Project = require('../models/ProjectModel');
let controller = {
    home: function(req,res){
    return res.status(200).send({
        mensaje: 'soy la home'
    });
},
test: function(req,res){
    return res.status(200).send({
        mensaje: "Soy el metodo test del controlador project"
    });
},
inicio: function(req,res){
    return res.status(200).send({
        mensaje :"jajjajaj"
    });
},
saveProject: function(req,res){
    let project = new Project();
    let params = req.body;
    project.name = params.name;
    project.apellido = params.apellido;
    project.ciudad = params.ciudad;
    project.edad = params.edad;
    project.fruta = params.fruta;
    project.save((err,projectStored)=>{
        if(err){
            return res.status(500)
            .send({
                    mensaje: "Error al guardar un documento"
                });
        }
        if(!projectStored){
            return res.status(404)
                        .send({mensaje:"el proyecto existe"});
        }
        return res.status(200).send({
            project: projectStored });
    });

}

};

module.exports = controller;