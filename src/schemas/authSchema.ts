import Joi from "joi";


export const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref('password')
});