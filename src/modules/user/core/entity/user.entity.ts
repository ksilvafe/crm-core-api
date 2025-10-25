import { CommonEntity } from "src/shared/common/common.entity";
import { Column, Entity, Unique } from "typeorm";
import { UserInterface } from "../interfaces/user-interface";

@Entity()
@Unique(['email'])
export class User extends CommonEntity implements UserInterface {

  @Column({ type: 'citext', nullable: false })
  name!: string;

  @Column({ type: 'citext', nullable: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'text', nullable: true, default: null })
  salt: string;

  @Column({ default: true, nullable: false })
  isActive: boolean;

  @Column({ type: 'uuid', nullable: true })
  resetToken: string | null;

  @Column({ type: 'timestamp', nullable: true })
  resetTokenExp: Date | null;
}
