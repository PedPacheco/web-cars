import { Router } from "express";
import { expressAdapter } from "../adapter/expressAdapter";
import { CreateUserModule } from "../entrypoint/modules/CreateUserModule";
import { CreateVehicleAdModule } from "../entrypoint/modules/CreateVehicleAdModule";
import { GetAllUsersModule } from "../entrypoint/modules/GetAllUsersModule";
import { GetUserByIdModule } from "../entrypoint/modules/GetUserByIdModule";
import { UpdateUserModule } from "../entrypoint/modules/UpdateUserModule";
import { Validate } from "../middleware/validate";
import { schemas } from "./schemas/vehicleSchema";

export const routes = Router();

routes.post("/users", expressAdapter(CreateUserModule));
routes.put("/users/:id", expressAdapter(UpdateUserModule));
routes.get("/users", expressAdapter(GetAllUsersModule));
routes.get("/users/:id", expressAdapter(GetUserByIdModule));
routes.post(
  "/vehicles",
  Validate(schemas.vehicle),
  expressAdapter(CreateVehicleAdModule)
);
