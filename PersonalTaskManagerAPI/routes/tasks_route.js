// Librerias
const express = require('express');
const router = express.Router();
// Funciones del sistema
const { MessageResponse } = require('../utils/utils.messages');
const { dataTaskValidation, dataTaskListValidation, dataTaskItemValidation } = require('../utils/utils.validations');
// modelos
const Task = require('../models/Task');

/**
 * Listar tareas.
 * Lista las tareas de un usuario en específico
 */
router.get('/list', async (req, res) => {
    try{
        const {error} = dataTaskListValidation(req.body);
        if (error) return MessageResponse(res, 499, error.details[0].message);

        const tasksList = await Task.find({ _owner: req.body._owner});
        MessageResponse(res, 200, tasksList);
    } catch(err) {
        MessageResponse(res, 500, err);
    }
});

/**
 * Obtener tarea.
 * Obtiene una tarea en específico por medio del id.
 */
router.get('/item/:taskId', async (req, res) => {
    try{
        const {error} = dataTaskItemValidation(req.body);
        if (error) return MessageResponse(res, 499, error.details[0].message);

        const taskItem = await Task.findById(req.params.taskId);
        MessageResponse(res, 200, taskItem);
    } catch(err) {
        MessageResponse(res, 500, err);
    }
});

/**
 * Guardar tarea
 * Guarda los datos de una nueva tarea en la base de datos.
 */
router.post('/save', async (req, res) => {
    const {error} = dataTaskValidation(req.body);
    if (error) return MessageResponse(res, 499, error.details[0].message);

    const task = new Task({
        _title: req.body._title,
        _description: req.body._description,
        _owner: req.body._owner,
        _deadline: req.body._deadline,
        _status: 'PENDIENTE'
    });

    try {
        const taskSaved = await task.save()
        MessageResponse(res, 201, taskSaved);
    } catch(err) {
        MessageResponse(res, 500, err);
    }
    
});

/**
 * Eliminar tarea
 * Elimina una tarea en específico
 */
router.delete('/item/:taskId', async (req, res) => {
    try{
        const taskRemoved = await Task.remove({_id: req.params.taskId});
        MessageResponse(res, 203, taskRemoved);
    } catch(err) {
        MessageResponse(res, 500, err);
    }
});

module.exports = router;