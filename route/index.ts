import express, { Express, Request, Response, Router } from "express";
import vehicleRoutes from "./vehicle.route";

const router: Router = express.Router();

const routes = [
  {
    route: "/vehicle",
    router: vehicleRoutes,
  },
];
routes.forEach((route) => {
  router.use(route.route, route.router);
});

export default router;
