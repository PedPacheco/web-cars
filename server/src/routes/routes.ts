import { Router } from "express";
import { expressAdapter } from "../adapter/expressAdapter";
import { createUserModule } from "../modules/CreateUserModule";
import { GetAllUsersModule } from "../modules/GetAllUsersModule";
import { GetUserByIdModule } from "../modules/GetUserByIdModule";

export const routes = Router();

routes.post("/users", expressAdapter(createUserModule));
routes.get("/users", expressAdapter(GetAllUsersModule));
routes.get("/users/:id", expressAdapter(GetUserByIdModule));
