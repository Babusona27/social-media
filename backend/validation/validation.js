const Joi = require('joi');

exports.validateRegister = function (payload) {
    const userRegisterSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        phone: Joi.string().required(),
        dob: Joi.date().required(),
        gender: Joi.string().required(),

    });
    return userRegisterSchema.validate(payload);
}

exports.validateLogin = function (payload) {
    const userLoginSchema = Joi.alternatives().try(
        Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }),
        Joi.object({
            phone: Joi.string().required(),
            password: Joi.string().required(),
        })
    );
    return userLoginSchema.validate(payload);
}
