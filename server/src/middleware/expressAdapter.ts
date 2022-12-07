import { NextFunction, Request, Response } from "express";

export const expressAdapter = (moduleFn: any) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const controller = moduleFn();
      const response = await controller.handle(req.params, req.query, req.body);

      return res.json(response);
    } catch (error: any) {
      res.status(400).send(error.message);
      next(error);
    }
  };
};
