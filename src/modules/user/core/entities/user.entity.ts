import { CommonEntity } from "src/common/common.entity";
import { Column, Entity } from "typeorm";
import { UserInterface } from "../interfaces/user-interface";

@Entity()
export class User extends CommonEntity implements UserInterface {

  @Column()
  name!: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  isActive: boolean;

  @Column()
  resetToken: string | null;

  @Column()
  resetTokenExp: Date | null;
}
