/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `homeController.ts`
 *
 * July 12, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import {Request, Response} from "express";

//* Internal Imports
import {ContentTypes as types} from "../../../util/contentTypes";

//* Main
export function homeController(req: Request, res: Response) {
    switch (req.get("Content-Type")) {
        case types.json: res.type(types.json); break;
        case types.ttl: res.type(types.ttl); break;
        case types.txt: res.type(types.txt); break;
        default: break;
    }
    res.status(200);
    res.send("API running succesfully.");
}
