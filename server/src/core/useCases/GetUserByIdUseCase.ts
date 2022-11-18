import { GetUserByIdRequest } from "../../entrypoint/requests/GetUserByIdRequest";
import { GetUserByIdBoundary } from "../boundary/GetUserByIdBoundary";

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
