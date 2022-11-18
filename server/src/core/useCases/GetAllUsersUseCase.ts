import { GetAllUsersBoundary } from "../boundary/GetAllUsersBoundary";

export class GetAllUsersUseCase {
  public constructor(private readonly boundary: GetAllUsersBoundary) {
    this.boundary = boundary;
  }

  async execute() {
    const response = await this.boundary.execute();

    return response;
  }
}
