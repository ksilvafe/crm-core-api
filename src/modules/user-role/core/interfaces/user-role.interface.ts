import { CommonEntityInterface } from "src/shared/common/interfaces/common-entity.interface";

export interface UserRoleInterface extends CommonEntityInterface {
  userId: string;
  roleId: string;
}