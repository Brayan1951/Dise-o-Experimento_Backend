const { Schema, model, SchemaTypes } = require("mongoose")
const Profesor = model('Profesor')
const Usuario = model('Usuario')

const CursoSchema = Schema({
    usuario: {
        type: SchemaTypes.ObjectId,
        ref: Usuario
    },
    nombre: {
        type: String,
        require: true
    },
    profesor: {
        type: SchemaTypes.ObjectId,
        ref: Profesor
    }
    // Agreagar horario

})

module.exports = model('Curso', CursoSchema)