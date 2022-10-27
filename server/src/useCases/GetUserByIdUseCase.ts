import { GetUserByIdBoundary } from "../boundary/GetUserByIdBoundary";
import { GetUserByIdRequest } from "./../requests/GetUserByIdRequest";

export class GetUserByIdUseCase {
  public constructor(private readonly boundary: GetUserByIdBoundary) {
    this.boundary = boundary;
  }
  execute({ id }: GetUserByIdRequest) {
    const response = this.boundary.execute({
      id,
    });

    return response;
  }
}
