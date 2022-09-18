import Joi from "joi";
import { LoginData } from "../types/userTypes";


export const userSchema = Joi.object<LoginData>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required() 
});

export const loginSchema = Joi.object<LoginData>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
