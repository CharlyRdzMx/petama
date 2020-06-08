// Librerías
const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
// Funciones del sistema
const { MessageResponse } = require('../utils/utils.messages');
const { dataUserValidation } = require('../utils/utils.validations');
// Modelos
const User = require('../models/User');


/**
 * Listar usuarios
 * Devuelve la lista de usuarios existentes.
 */
router.get('/list', async (req, res) => {
    try{
        const userList = await User.find();
        for(let usr of userList) { usr._password = ''; }
        return MessageResponse(res, 200, userList);
    } catch(err) {
        console.log(err.message);
        return MessageResponse(res, 500, err);
    }
});

/**
 * Obtener usuario.
 * Obtiene un usuario en específico por medio del id.
 */
router.get('/user/:userId', async (req, res) => {
    try{
        const getUser = await User.findById(req.params.userId);
        getUser._password = '';
        return MessageResponse(res, 200, getUser);
    } catch(err) {
        return MessageResponse(res, 500, err);
    }
});

/**
 * Guardar un usuario
 * Guarda los datos de un nuevo usuario en la base de datos.
 */
router.post('/save', async (req, res) => {

    try {
        // Validando los datos antes de crear el usuario.
        const {error} = dataUserValidation(req.body);
        if (error) return MessageResponse(res, 499, error.details[0].message);

        // Revisando si el correo electrónico o el usuario ya existe en la base de datos.
        const mailExist = await User.findOne({_email: req.body._email});
        if (mailExist) return MessageResponse(res, 499, 'El correo electrónico ya existe.');

        // Encriptando la contraseña para el usuario.
        const passEncrypted  = bcryptjs.hashSync(req.body._password, 10);

        // Creando registro de usuario.
        const newUser = new User({
            _email: req.body._email,
            _password: passEncrypted,
            _name: req.body._name,
            _lastname: req.body._lastname,
            _role: req.body._role
        });
        
        const saveUser = await newUser.save()
        saveUser._password = '';

        return MessageResponse(res, 201, saveUser);    
    } catch(err) {
        return MessageResponse(res, 500, err);
    }
});

/**
 * Actualizar password del usuario
 */
router.patch('/user/:userId', async (req, res) => {
    try{
        const updateUserPass = await User.updateOne(
                { _id: req.params.userId }, 
                { $set: { _password: req.body._password } }
            );
        return MessageResponse(res, 202, updateUserPass);
    } catch(err) {
        return MessageResponse(res, 500, err);
    }
});

/**
 * Eliminar usuario
 * Elimina un usuario en específico
 */
router.delete('/user/:userId', async (req, res) => {
    try{
        const removeUser = await Task.remove({_id: req.params.userId});
        return MessageResponse(res, 203, removeUser);
    } catch(err) {
        return MessageResponse(res, 500, err);
    }
});

module.exports = router;