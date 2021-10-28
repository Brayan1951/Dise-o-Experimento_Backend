const { response } = require('express');
const Profesor = require('../models/Profesor')
const Curso = require('../models/Curso')

const crearCurso = async(req, res = response) => {
    const { usuario, nombre, profesor } = req.body

    try {
        const dbCurso = new Curso(req.body)
        await dbCurso.save()

        return res.status(201).json({
            ok: true,
            id: dbCurso.id,
            usuario,
            nombre,
            profesor
        })


    } catch (error) {
        console.log(error);
    }

}

const viewCurso = async(req, res = response) => {
    const cursos = await Curso.find()
    res.json(cursos)
}
const viewCursoUser = async(req, res = response) => {
    const { usuario } = req.body
    const cursos = await Curso.find({ "usuario": usuario })
    res.json(cursos)
}
const viewCursoProf = async(req, res = response) => {
    const { profesor } = req.body
    const cursos = await Curso.find({ "profesor": profesor })
    res.json(cursos)
}

module.exports = {
    crearCurso,
    viewCurso,
    viewCursoUser,
    viewCursoProf
}