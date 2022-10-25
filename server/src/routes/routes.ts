import { Router } from "express";
import { expressAdapter } from "../adapter/expressAdapter";
import { createUserModule } from "../modules/CreateUserModule";
import { ListAllUsersModule } from "../modules/ListAllUsersModule";

export const routes = Router();

routes.post("/users", expressAdapter(createUserModule));
routes.get("/users", expressAdapter(ListAllUsersModule));
