import Joi from "joi";

export const testSchema = Joi.object({
    name: Joi.string().trim().required(),
    pdfUrl: Joi.string().uri(),
    category: Joi.string().trim().required(),
    discipline: Joi.string().trim().required(),
    teacher: Joi.string().trim().required()
});
