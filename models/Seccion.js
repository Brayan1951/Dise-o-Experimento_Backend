const { Schema, model, SchemaTypes } = require("mongoose")

const Usuario = model('Usuario')
const Curso = model('Curso')


const SeccionSchema = Schema({

    usuario: {
        type: SchemaTypes.ObjectId,
        ref: Usuario
    },
    nombre: {
        type: String,
        require: true
    },
    curso: [{
        type: SchemaTypes.ObjectId,
        ref: Curso
    }],
    limite: {
        type: Number,
        require: true
    }
    // alumnos
})

module.exports = model('Seccion', SeccionSchema)