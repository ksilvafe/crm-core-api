import { User } from "src/modules/user/core/entities/user.entity";
import { CommonEntityInterface } from "src/shared/common/interfaces/common-entity.interface";
import { ManyToMany } from "typeorm";

export interface RoleInterface extends CommonEntityInterface {
  name: string;
}