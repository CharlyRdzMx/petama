// Librerías
const express = require('express');
const router = express.Router();
// Funciones del sistema
const { MessageResponse } = require('../utils/utils.messages');
// Modelos
const Role = require('../models/Role');

/**
 * Listar roles
 * Devuelve la lista de roles existentes.
 */
router.get('/list', async (req, res) => {
    try{
        const rolesList = await Role.find();
        return MessageResponse(res, 200, rolesList);
    } catch(err) {
        return MessageResponse(res, 500, err);
    }
});

module.exports = router;