import { Request, Response } from "express";
import { AddCarUseCase } from "./../useCases/addCarUseCaseUseCase";

export class AddCarController {
  constructor(private addCarUseCase: AddCarUseCase) {
    this.addCarUseCase = addCarUseCase;
  }

  handle(req: Request, res: Response) {
    const response = this.addCarUseCase.execute();

    return res.status(201).json(response);
  }
}
