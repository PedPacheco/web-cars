import { AddCarBoundary } from "./../boundary/addCarBoundary";

export class AddCarUseCase {
  public constructor(private readonly boundary: AddCarBoundary) {
    this.boundary = boundary;
  }
  execute() {
    const response = this.boundary.execute();
    return response;
  }
}
