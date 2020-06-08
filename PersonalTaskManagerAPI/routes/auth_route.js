// Librerías
const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv/config');

// Funciones del sistema
const { MessageResponse } = require('../utils/utils.messages');
const { loginUserValidation } = require('../utils/utils.validations');

// Modelos
const User = require('../models/User');

router.post('/', async (req, res) => {
    try {
        // Validando los datos
        const {error} = loginUserValidation(req.body);
        if (error)  return MessageResponse(res, 499, error.details[0].message);

        // Validando la existencia del usuario.
        const findUser = await User.findOne({_email: req.body._email});
        if (!findUser) return MessageResponse(res, 401, null)

        const validPass = bcryptjs.compareSync(req.body._password, findUser._password);
        if (!validPass) return MessageResponse(res, 401, null)

        findUser._password = '';

        // Creando el token y enviando la respuesta al cliente. 
        const token = jwt.sign({ _id: findUser._id, _email: findUser._email, _exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 3) }, process.env.JWT_PRIVATEKEY);
        res.header('auth-token', token);

        findUser._token = token;

        return MessageResponse(res, 200, findUser);
    } catch(error) {
        return MessageResponse(res, 500, error);
    }
});

module.exports = router;