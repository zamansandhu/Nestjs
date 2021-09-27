import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as crypto from 'crypto';

@Entity('units')
export class UnitsEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  tenantId: string;

  @Column()
  clientId: string;
  @Column()
  unit: string;

  @Column()
  unitText: string;
}