/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # api.semantyk.com
 * Module | `home.test.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import request from "supertest";

//* Internal Imports
import app from "../src/app";

//* Main
describe("GET /", () => {
    it("status: 200 OK", () => {
        return request(app).get("/").expect(200);
    });
});
