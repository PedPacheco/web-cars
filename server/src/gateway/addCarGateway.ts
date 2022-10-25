import { AddCarBoundary } from "../boundary/addCarBoundary";

export class AddCarGateway implements AddCarBoundary {
  execute() {
    return 'hello world'
  }
}
