import { Request, Response } from "express";
import { AddCarUseCase } from "./../useCases/addCarUseCaseUseCase";

export class AddCarController {
  constructor(private useCase: AddCarUseCase) {
    this.useCase = useCase;
  }

  handle(req: Request, res: Response) {
    const response = this.useCase.execute();

    return response
  }
}
