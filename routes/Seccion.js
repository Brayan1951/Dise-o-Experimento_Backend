const { Router } = require('express');
const { check } = require('express-validator');
const { crearSeccion, assignarCurso, viewSeccionUser, viewSeccion } = require('../controllers/Seccion')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

// Crear seccion
router.post('/new', [], crearSeccion)

// Asignar curso
router.put('/Asignar/:id', [], assignarCurso)

// ver los cursos 
router.get('/viewAll', [], viewSeccion)

// ver los cursos por usuario
router.get('/view', [], viewSeccionUser)


module.exports = router