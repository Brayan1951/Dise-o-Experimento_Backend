const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// console.log(process.env);

//crear el servidor/ aplicacion de express
const app = express();

//base de datos
dbConnection();

//Directorio Publico
app.use(express.static('public'))

//cors
app.use(cors());

//lectura y parseo del body
app.use(express.json());

//rutas
app.use('/api/usuario', require('./routes/Usuario'));
app.use('/api/profesor', require('./routes/Profesor'));
app.use('/api/curso', require('./routes/Curso'));
app.use('/api/seccion', require('./routes/Seccion'));

// app.use('/api/usuario', require('./routes/Usuario'));
// app.use('/api/teacher', require('./routes/auth.teacher'));
// app.use('/api/curso', require('./routes/cursos'));
// app.use('/api/student', require('./routes/student'));
// app.use('/api/section', require('./routes/section'));
// app.use('/api/matricula', require('./routes/matricula'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`)
})