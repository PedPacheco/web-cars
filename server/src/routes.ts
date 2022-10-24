import express from "express";
import { AddCarAdapter } from "./adapters/addCarAdapter";

export const routes = express.Router();

const addCarAdapter = new AddCarAdapter();

routes.get("/cars", (req, res) => {
  addCarAdapter.execute();
});
