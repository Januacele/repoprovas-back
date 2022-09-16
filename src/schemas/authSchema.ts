import Joi from "joi";

type LoginData = {
    email: string;
    password: string;
    confirmPassword: string
}

export const userSchema = Joi.object<LoginData>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required() 
});

export const loginSchema = Joi.object<LoginData>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
