/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # api.semantyk.com
 * Module | `homeRoutes.ts`
 *
 * July 12, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import { Router } from "express";

//* Internal Imports
import { homeController } from "../controllers/home/homeController";

//* Main
const homeRoutes = Router();

homeRoutes.get("/", homeController);

export default homeRoutes;
