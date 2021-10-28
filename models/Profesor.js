const { Schema, model, SchemaTypes } = require("mongoose")
const Usuario = model('Usuario')

const ProfesorSchema = Schema({
    usuario: {
        type: SchemaTypes.ObjectId,
        ref: "Usuario"
    },
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    dni: {
        type: String,
        require: true,
        // unique: true
    },
    telefono: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        // unique: true
    },
    especialidad: {
        type: String,
        require: true
    }

})


module.exports = model("Profesor", ProfesorSchema)