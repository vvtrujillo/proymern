const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // para encruptar el password

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido.']
    },

    apellido: {
        type: String,
        required: [true, 'El apellido es requerido.']
    },

    email: {
        type: String,
        required: [true, 'El correo es requerido.']
    },

    password: {
        type: String,
        required: [true, 'El password es requerido.'],
        minlength: [6, 'El password debe tener al menos 6 caracteres.']
    }

}, {timestamps: true});

    //se añade despues del UsuarioSchema is definido
    UsuarioSchema.virtual('confirmPassword')
        .get(() => this._confirmPassword)
        .set(value => this._confirmPassword = value);

    UsuarioSchema.pre('validate', function(next){
        if(this.password !== this.confirmPassword){
            this.invalidate('confirmPassword', 'los password deben ser iguales')
        }
        next();
    });

    UsuarioSchema.pre('save', function(next){
        bcrypt.hash(this.password, 10)
            .then(hash =>{
                this.password = hash;
                next();
            });
    });

const Usuario = mongoose.model('Usuario', UsuarioSchema);

exports.default = Usuario;