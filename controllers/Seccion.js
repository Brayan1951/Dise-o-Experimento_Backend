const { response } = require('express');
const Curso = require('../models/Curso')
const Seccion = require('../models/Seccion')


const crearSeccion = async(req, res = response) => {
    const { usuario, nombre, limite } = req.body

    try {
        const dbSeccion = new Seccion(req.body)
        await dbSeccion.save()

        return res.status(201).json({
            ok: true,
            id: dbSeccion.id,
            usuario,
            nombre,
            limite
        })

    } catch (error) {
        console.log(error);
    }

}

const assignarCurso = async(req, res = response) => {

    const { id } = req.params
    const { curso } = req.body

    const updtasection = await Seccion.findByIdAndUpdate(id, {
        $push: { curso }
    }, { useFindAndModify: false })
    res.send(`${updtasection.nombre} se asigno el curso`)

}
const viewSeccion = async(req, res = response) => {
    const seccion = await Seccion.find()
    res.json(seccion)
}
const viewSeccionUser = async(req, res = response) => {
    const { usuario } = req.body
    const seccion = await Seccion.find({ "usuario": usuario })
    res.json(seccion)
}


module.exports = {
    crearSeccion,
    assignarCurso,
    viewSeccion,
    viewSeccionUser
}