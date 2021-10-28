const { response } = require('express');
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt')

const crearUsuario = async(req, res = response) => {

    const { nombre, dni, telefono, email, password } = req.body

    try {
        // Verificar email
        const usuario = await Usuario.findOne({ email })
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usario con este email'
            })
        }
        // Creamos usuario en el modelo
        const dbUser = new Usuario(req.body)

        // Hassheamos la contraseña
        const salt = bcrypt.genSaltSync()
        dbUser.password = bcrypt.hashSync(password, salt)

        // Genera JWT
        const token = await generarJWT(dbUser.id, nombre)

        // Crear usuario en la BD
        await dbUser.save()

        // Generamos respuesta
        return res.status(201).json({
            ok: true,
            id: dbUser.id,
            nombre,
            dni,
            telefono,
            email,
            token
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: FontFaceSetLoadEvent,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const loginUsuario = async(req, res = response) => {
    const { email, password } = req.body

    try {
        //Buscar a usuario 
        const dbUser = await Usuario.findOne({ email })

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no exite'
            })
        }

        // Confirmar si el password hace match
        const validarPassword = bcrypt.compareSync(password, dbUser.password)

        // verificar
        if (!validarPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'El password no es valido'
            })
        }

        // Generar JWT
        const token = await generarJWT(dbUser.id, dbUser.nombre)

        // Respuesta del servidor

        return res.json({
            ok: true,
            id: dbUser.id,
            nombre: dbUser.nombre,
            email: dbUser.email,
            token
        })



    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}


const revalidarToken = async(req, res = response) => {
    const { id } = req

    // leer la base de datos
    const dbUser = await USuario.findById(id)

    //Generar el JWT
    const token = await generarJWT(id, dbUser.nombre)

    return res.json({
        ok: true,
        id: dbUser.id,
        nombre: dbUser.nombre,
        email: dbUser.email,
        token
    })

}

const viewUsers = async(req, res = response) => {

    const users = await Usuario.find()
    res.json(users)
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    viewUsers
}