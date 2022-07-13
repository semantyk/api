/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # api.semantyk.com
 * Module | `routes.ts`
 *
 * July 12, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import { Router } from "express";

//* Internal Imports
import homeRoutes from "./homeRoutes";

//* Main
const routes = Router();

routes.use("/", homeRoutes);

export default routes;
