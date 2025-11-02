import { CommonEntity } from "src/common/common.entity";
import { Column, Entity, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class Lead extends CommonEntity {
  @Column({ type: "citext", nullable: false })
  name!: string;

  @Column({ type: "citext", nullable: true })
  email: string;

  @Column({ type: "text", nullable: true })
  phoneNumber: string;
}
