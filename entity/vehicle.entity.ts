import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
} from "typeorm";
import { StateLogs } from "./stateLogs.entity";

@Entity("vehicles")
export class Vehicle {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column({ type: "text", name: "make" })
  make: string;

  @Column({ type: "text", name: "model" })
  model: string;

  @OneToMany((type) => StateLogs, (StateLogs) => StateLogs.vehicleId)
  state: StateLogs[];
}
