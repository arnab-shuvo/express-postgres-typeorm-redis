import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./route/index";
import dataSource from "./client/dbClient";
import { initRedis } from "./client/redis";

dotenv.config();
const PORT = process.env.PORT;

dataSource.initialize().then(async () => {
  const app: Express = express();

  await initRedis();
  app.use(express.json());

  app.use("/", routes);

  app.listen(PORT, () => {
    console.log(`🔥🔥 Server is listening on port ${PORT} 🔥🔥🔥`);
  });
});
