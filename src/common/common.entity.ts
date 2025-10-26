import { ApiProperty } from "@nestjs/swagger";
import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntityInterface } from "./interfaces/common-entity.interface";

export abstract class CommonEntity implements CommonEntityInterface {

  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id!: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt!: Date;

  @CreateDateColumn()
  @ApiProperty()
  updatedAt!: Date;

}