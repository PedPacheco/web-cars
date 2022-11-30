import { Router } from "express";
import { expressAdapter } from "../../middleware/expressAdapter";
import { Validate } from "../../middleware/validate";
import { CreateUserModule } from "../modules/CreateUserModule";
import { CreateVehicleAdModule } from "../modules/CreateVehicleAdModule";
import { GetAllUsersModule } from "../modules/GetAllUsersModule";
import { GetAllVehiclesModule } from "../modules/GetAllVehiclesModule";
import { GetUserByIdModule } from "../modules/GetUserByIdModule";
import { GetUserVehiclesModule } from "../modules/GetUserVehiclesModule";
import { UpdateUserModule } from "../modules/UpdateUserModule";
import { schemas } from "../schemas/vehicleSchema";

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
routes.get("/vehicles", expressAdapter(GetAllVehiclesModule));
routes.get("/vehicles/:id", expressAdapter(GetUserVehiclesModule));
