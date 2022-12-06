import { Router } from "express";
import { expressAdapter } from "../../middleware/expressAdapter";
import { Validate } from "../../middleware/validate";
import { CreateUserModule } from "../modules/CreateUserModule";
import { CreateVehicleAdModule } from "../modules/CreateVehicleAdModule";
import { GetAllUsersModule } from "../modules/GetAllUsersModule";
import { GetAllVehiclesModule } from "../modules/GetAllVehiclesModule";
import { GetUserByIdModule } from "../modules/GetUserByIdModule";
import { GetUserVehiclesModule } from "../modules/GetUserVehiclesModule";
import { GetVehicleByIdModule } from "../modules/GetVehicleByIdModule";
import { SendMailModule } from "../modules/SendMailModule";
import { UpdateUserModule } from "../modules/UpdateUserModule";
import { schemas } from "../schemas/Schemas";

export const routes = Router();

routes.post("/users", expressAdapter(CreateUserModule));
routes.put("/users/:id", expressAdapter(UpdateUserModule));
routes.get("/users", expressAdapter(GetAllUsersModule));
routes.get("/users/:id", expressAdapter(GetUserByIdModule));
routes.get("/users/vehicles/:id", expressAdapter(GetUserVehiclesModule));
routes.post(
  "/vehicles",
  Validate(schemas.vehicle),
  expressAdapter(CreateVehicleAdModule)
);
routes.get("/vehicles", expressAdapter(GetAllVehiclesModule));
routes.get("/vehicles/:userId/:id", expressAdapter(GetVehicleByIdModule));
routes.post("/email", Validate(schemas.email), expressAdapter(SendMailModule));
