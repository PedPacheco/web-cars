import { Router } from "express";
import { expressAdapter } from "./adapter";

import { addCarModule } from "./modules/addCarModule";

export const routes = Router();

routes.get("/cars", expressAdapter(addCarModule));
