const Usuario = require('../models/usuario.model');

module.exports.registrar = (req, res) => {
    Usuario.create(req.body)
        .then(usuario => {
            console.log(usuario);
            res.json({
                error: false,
                mensaje: 'El usuario se ha registrado exitosamente'
            })
        }).catch(e =>{
            console.log(e);
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error'
            })
        });
}