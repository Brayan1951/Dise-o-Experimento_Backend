const { response } = require('express');
const Profesor = require('../models/Profesor')
const Usuario = require('../models/Usuario')

const crearProfesor = async(req, res = response) => {

    const { usuario, nombre, apellido, dni, telefono, email, especialidad } = req.body
    try {
        const dbProfesor = new Profesor(req.body)

        await dbProfesor.save()
        return res.status(201).json({
            ok: true,
            id: dbProfesor.id,
            usuario,
            nombre,
            apellido,
            dni,
            telefono,
            email,
            especialidad
        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Algo salio mal al registrar'
        });
    }

}

const viewProfesor = async(req, res = response) => {
    const profes = await Profesor.find()
    res.json(profes)
}

const viewProfesorUser = async(req, res = response) => {
    const { usuario } = req.body
    const profesor = await Profesor.find({ "usuario": usuario })
    res.json(profesor)
}


module.exports = {
    crearProfesor,
    viewProfesor,
    viewProfesorUser
}