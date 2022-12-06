import Joi from "joi";

export const schemas = {
  vehicle: Joi.object().keys({
    userId: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    modelYear: Joi.number().required(),
    yearOfManufacture: Joi.number().required(),
    version: Joi.string().required(),
    color: Joi.string().required(),
    kmTraveled: Joi.number().required(),
    price: Joi.number().required(),
    photos: Joi.array(),
    description: Joi.string(),
  }),

  email: Joi.object().keys({
    fromEmailUser: Joi.string().required(),
    toEmailUser: Joi.string().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    message: Joi.string().required(),
  }),
};