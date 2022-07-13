import request from "supertest";
import app from "../src/app";


describe("GET /", () => {
    it("status: 200 OK", () => {
        return request(app).get("/").expect(200);
    });
});
