import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { messages } from "joi-translation-pt-br";

export const Validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { messages });
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      if (details) {
        const message = details.map((i: any) => i.message).join(",");
        console.log("error", message);
        res.status(422).json(message);
      }
    }
  };
};
