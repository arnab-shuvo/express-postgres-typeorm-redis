import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import { StateLogs } from "./stateLogs.entity";

@Entity("vehicles")
export class Vehicle {
  @PrimaryColumn({ type: "integer", name: "id" })
  id: number;

  @Column({ type: "text", name: "make" })
  make: string;

  @Column({ type: "text", name: "model" })
  model: string;

  @OneToMany((type) => StateLogs, (StateLogs) => StateLogs.vehicleId)
  state: StateLogs[];
}
