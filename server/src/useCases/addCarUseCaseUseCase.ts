import { AddCarRepository } from "./../boundary/addCarBoundary";

export class AddCarUseCase {
  constructor(private addCarRepository: AddCarRepository) {
    this.addCarRepository = addCarRepository;
  }
  execute() {
    const response = this.addCarRepository.execute();
    return response;
  }
}
