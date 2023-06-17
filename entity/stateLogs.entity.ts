import {
  Entity,
  Column,
  ManyToOne,
  Timestamp,
  PrimaryColumn,
  JoinColumn,
} from "typeorm";
import { Vehicle } from "./vehicle.entity";

@Entity("stateLogs")
export class StateLogs {
  @Column({ type: "text", name: "state" })
  state: string;

  @PrimaryColumn({ type: "timestamp", name: "timestamp" })
  timeStamp: Timestamp;

  @ManyToOne((type) => Vehicle, (Vehicle) => Vehicle.id)
  @JoinColumn([
    {
      name: "vehicleId",
      referencedColumnName: "id",
    },
  ])
  vehicleId: Vehicle;
}
