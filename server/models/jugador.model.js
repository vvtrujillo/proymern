const mongoose = require('mongoose');

const JugadorSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre del jugador es requerido.'],
        minlength: [2, 'El nombre debe tener al menos 2 caracteres.']
    },
    
    posicion:{
        type: String,
        required: [true, 'La posicion del jugador es requerida.'],
        maxlength: [30, 'El largo de la posicion debe ser menor a 30 caracteres.']
    }
}, {timestamps: true});

const Jugador = mongoose.model('Jugador', JugadorSchema);

module.exports=Jugador;