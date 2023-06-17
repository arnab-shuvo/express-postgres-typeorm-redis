import express, { Express, Request, Response, Router } from "express";
import { Vehicle } from "../entity/vehicle.entity";
import dataSource from "../client/dbClient";
import { getVehicleByTime } from "../controller/vehicle.controller";

const vehicle = dataSource.getRepository(Vehicle);

const router: Router = express.Router();

router.post("/vehicle-by-time/:id", getVehicleByTime);

export default router;
