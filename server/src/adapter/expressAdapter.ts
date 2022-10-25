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

      return res.status(response.status).json(response.users);
    } catch (error) {
      res.status(500).json({ message: "Something is wrong!" });
      next(error);
    }
  };
};
