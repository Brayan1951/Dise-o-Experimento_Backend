const { Router } = require('express');
const { check } = require('express-validator');
const { crearCurso, viewCursoProf, viewCursoUser, viewCurso } = require('../controllers/Curso')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

// Crear Curso

router.post('/new', [], crearCurso)

// ver todos los cursos 
router.get('/view', [], viewCurso)

// ver todos los cursos por usuario
router.get('/viewUser', [], viewCursoUser)


// ver todos los cursos por profesor
router.get('/viewPro', [], viewCursoProf)

module.exports = router