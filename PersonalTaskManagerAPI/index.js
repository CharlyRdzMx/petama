// Librerías
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Funciones del sistema
const verifyToken = require('./utils/utils.token');
const { MessageResponse } = require('./utils/utils.messages');


app.use(cors());
app.use(bodyParser.json());

// INTERCEPTOR **********************************************************************

app.use(verifyToken, function(req, res, next) {
    next();
});

// RUTAS ****************************************************************************

app.get('/', verifyToken, function(req, res) {
    MessageResponse(res, 100, null);
});

const authRoute = require('./routes/auth_route');
app.use('/auth', authRoute);

const taskRoute = require('./routes/tasks_route');
app.use('/tasks', taskRoute);

const userRoute = require('./routes/users_route');
app.use('/users', userRoute);

const roleRoute = require('./routes/roles_route');
app.use('/roles', roleRoute);


// CONEXION A LA BASE DE DATOS ******************************************************

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('conectado!')
);

// INICIALIZA SERVIDOR **************************************************************

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
})
