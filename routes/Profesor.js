const { Router } = require('express');
const { check } = require('express-validator');
const { crearProfesor, viewProfesor, viewProfesorUser } = require('../controllers/Profesor')
const { validarCampos } = require('../middlewares/validar-campos')



const router = Router()

// Crear Profesor
router.post('/new', [

], crearProfesor)

// ver todos los profesores
router.get('/viewAll', [], viewProfesor)

// ver profesor por user
router.get('/view', [], viewProfesorUser)


module.exports = router