import { DataSource } from "typeorm";
import { Vehicle } from "../entity/vehicle.entity";
import { StateLogs } from "../entity/stateLogs.entity";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user",
  password: "password",
  database: "motorway",
  entities: [Vehicle, StateLogs],
  logging: true,
});

export default dataSource;
