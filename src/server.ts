/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # api.semantyk.com
 * Module | `server.ts`
 *
 * July 12, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Internal Exports
import app from "./app";

//* Main
const server = app.listen(app.get("port"), () => console.log(`API running at http://localhost:${app.get("port")} in ${app.get("env")} mode`));

export default server;
