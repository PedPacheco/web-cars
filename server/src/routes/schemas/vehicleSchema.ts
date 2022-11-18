import Joi from "joi";

export const schemas = {
  vehicle: Joi.object().keys({
    brand: Joi.string().required(),
    model: Joi.string().required(),
    modelYear: Joi.number().required(),
    yearOfManufacture: Joi.number().required(),
    version: Joi.string().required(),
    color: Joi.string().required(),
    kmTraveled: Joi.number().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    photos: Joi.object().required(),
  }),
};
