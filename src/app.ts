/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `app.ts`
 *
 * July 12, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import express from "express";
import path from "path";

//* Internal Imports
import routes from "./routes/routes";

//* Main
const app = express();
// body-parser Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// PUBLIC_URL Configuration
app.use(express.static(path.join(__dirname, "../public")));
// Routes Configuration
app.use(routes);
// PORT Configuration
app.set("port", process.env.PORT || 8080);

export default app;
