// Validación de datos
const Joi = require('@hapi/joi');

const loginUserValidation = data => {
    const schema = Joi.object({
        _email: Joi.string().min(6).required(),
        _password: Joi.string().min(8).required()
    });
    return schema.validate(data);
}

const dataUserValidation = data => {
    const schema = Joi.object({
        _email: Joi.string().min(3).required().email(),
        _password: Joi.string().min(8).required(),
        _name: Joi.string().min(3).required(),
        _lastname: Joi.string().min(3).required(),
        _role: Joi.string().required(),
    });
    return schema.validate(data);
}

const dataTaskValidation = data => {
    const schema = Joi.object({
        _title: Joi.string().min(3).required(),
        _description: Joi.string().min(2).required(),
        _owner: Joi.string().required(),
        _deadline: Joi.string().required(),
    });
    return schema.validate(data);
}

const dataTaskItemValidation = data => {
    const schema = Joi.object({
        _id: Joi.string().required()
    });
    return schema.validate(data);
}

const dataTaskListValidation = data => {
    const schema = Joi.object({
        _owner: Joi.string().required()
    });
    return schema.validate(data);
}

module.exports.dataUserValidation = dataUserValidation;
module.exports.loginUserValidation = loginUserValidation;
module.exports.dataTaskValidation = dataTaskValidation;
module.exports.dataTaskItemValidation = dataTaskItemValidation;
module.exports.dataTaskListValidation = dataTaskListValidation;
