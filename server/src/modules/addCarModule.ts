import { AddCarGateway } from '../gateway/addCarGateway';
import { AddCarController } from "../controllers/addCarController";
import { AddCarUseCase } from "../useCases/addCarUseCaseUseCase";

export function addCarModule(): AddCarController {
    const gateway = new AddCarGateway();
    const useCase = new AddCarUseCase(gateway);
    
    return new AddCarController(useCase);
}
