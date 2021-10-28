const { response } = require('express');
const Alumno = require('../models/Alumno')
const Usuario = require('../models/Usuario')

const crearAlumno = async(req, res = response) => {

    const { usuario, nombre, apellido, dni, telefono, email, gusto } = req.body

    try {
        const dbAlumno = new Alumno(req.body)

        await dbAlumno.save()

        return res.status(201).json({
            ok: true,
            id: dbAlumno.id,
            usuario,
            nombre,
            apellido,
            dni,
            telefono,
            email,
            gusto

        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Algo salio mal al registrar'
        });
    }

}