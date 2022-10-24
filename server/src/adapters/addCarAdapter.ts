import { AddCarController } from "../controllers/addCarController";
import { AddCarUseCase } from "../useCases/addCarUseCaseUseCase";
// import { AddCarGateway } from "../gateway/addCarGateway";
import { AddCarRepository } from "./../boundary/addCarBoundary";

export class AddCarAdapter {
  execute() {
    // const addCarGateway = new AddCarGateway();
    const addCarRepository = new AddCarRepository();
    const addCarUseCase = new AddCarUseCase(addCarRepository);
    const addCarController = new AddCarController(addCarUseCase);

    const response = addCarController.handle;
    return response;
  }
}
