import { Request, Response } from "express";
import dataSource from "../client/dbClient";
import { StateLogs } from "../entity/stateLogs.entity";
import { getCache, setCache } from "../client/redis";
const stateLogsRepository = dataSource.getRepository(StateLogs);

export const getVehicleByTime = async (req: Request, res: Response) => {
  const { id: vehicleId } = req.params;
  const timeStamp = req.body.timestamp;

  try {
    const cacheData = await getCache(`state-by-time:${vehicleId}`);

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

      setCache(`state-by-time:${vehicleId}`, result);

      res.json(result);
    }
  } catch (error) {
    console.log(error, "asdas");

    res.status(500).json(error);
  }
};
