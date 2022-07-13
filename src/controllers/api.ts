import { Application } from "express";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/", (req, res) => {
    return res.status(200).send("API Running Successfully.");
  });
};
