import { Router } from "express";
import { expressAdapter } from "../adapter/expressAdapter";
import { CreateUserModule } from "../modules/CreateUserModule";
import { CreateVehicleAdModule } from "../modules/CreateVehicleAdModule";
import { GetAllUsersModule } from "../modules/GetAllUsersModule";
import { GetUserByIdModule } from "../modules/GetUserByIdModule";
import { UpdateUserModule } from "../modules/UpdateUserModule";

export const routes = Router();

routes.post("/users", expressAdapter(CreateUserModule));
routes.put("/users/:id", expressAdapter(UpdateUserModule));
routes.get("/users", expressAdapter(GetAllUsersModule));
routes.get("/users/:id", expressAdapter(GetUserByIdModule));
routes.post("/vehicles", expressAdapter(CreateVehicleAdModule));
