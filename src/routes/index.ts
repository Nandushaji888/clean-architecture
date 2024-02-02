import express from "express";
import userRoutes from "./userRoutes";
const route = express.Router();

export const routes = (dependencies: any) => {
  route.use("/user", userRoutes(dependencies));
  return route;
};


