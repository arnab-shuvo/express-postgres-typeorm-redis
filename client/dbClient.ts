import { DataSource } from "typeorm";
import { Vehicle } from "../entity/vehicle.entity";
import { StateLogs } from "../entity/stateLogs.entity";
import dotenv from "dotenv";
dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [Vehicle, StateLogs],
  logging: true,
});

export default dataSource;
