import { Request, Response } from "express";
import dataSource from "../client/dbClient";
import { StateLogs } from "../entity/stateLogs.entity";
import { getCache, setCache } from "../client/redis";

export const getVehicleByTime = async (req: Request, res: Response) => {
  const stateLogsRepository = dataSource.getRepository(StateLogs);
  const { id: vehicleId } = req.params;
  const timeStamp = req.body.timestamp;
  const cacheKey = `state-by-time:${vehicleId}`;

  try {
    const cacheData = await getCache(cacheKey);

    if (cacheData) {
      res.json(JSON.parse(cacheData));
    } else {
      const result = await stateLogsRepository
        .createQueryBuilder("s")
        .innerJoinAndSelect("s.vehicleId", "vehicle")
        .where("s.timeStamp = :timeStamp", {
          timeStamp: timeStamp,
        })
        .andWhere("vehicle.id = :vehicleId", { vehicleId: vehicleId })
        .getMany();
      console.log(result, "==result");

      setCache(cacheKey, result);

      res.json(result);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
