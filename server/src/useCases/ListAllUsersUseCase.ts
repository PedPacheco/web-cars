import { ListAllUsersBoundary } from "../boundary/ListAllUsersBoundary";

export class ListAllUsersUseCase {
  public constructor(private readonly boundary: ListAllUsersBoundary) {
    this.boundary = boundary;
  }

  async execute() {
    const response = await this.boundary.execute();

    return response;
  }
}
