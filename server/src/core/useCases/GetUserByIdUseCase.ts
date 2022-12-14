import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";
import { GetUserByIdBoundary } from "../boundary/GetUserByIdBoundary";

export class GetUserByIdUseCase {
  public constructor(private readonly boundary: GetUserByIdBoundary) {
    this.boundary = boundary;
  }
  execute({ id }: GetByIdRequest) {
    const response = this.boundary.execute({
      id,
    });
    return response;
  }
}
