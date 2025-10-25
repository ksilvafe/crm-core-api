import { CommonEntityInterface } from "src/common/interfaces/common-entity.interface";

export interface UserInterface extends CommonEntityInterface {
  name?: string;
  email?: string;
  password?: string;
  salt?: string;
  isActive?: boolean;
  resetToken?: string | null;
  resetTokenExp?: Date | null;
}