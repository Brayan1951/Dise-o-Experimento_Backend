const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken, viewUsers } = require('../controllers/Usuario')
const { validarJWT } = require('../middlewares/valdiar-jwt')
const { validarCampos } = require('../middlewares/validar-campos')



const router = Router();


// Crear usaurio
router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('dni', 'El nombre es obligatorio').isLength({ min: 8 }),
    check('telefono', 'El nombre es obligatorio').isLength({ min: 9 }),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').isLength({ min: 6 }),
    validarCampos
], crearUsuario);


// Login Usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').isLength({ min: 6 }),
    validarCampos
], loginUsuario);

// Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken);


// ver usuarios
router.get('/view', viewUsers);

// console.log(router.get('v'));
module.exports = router;