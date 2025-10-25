import { UserInterface } from "./user-interface";

export interface UserCreatableInterface
  extends Pick<
      UserInterface,
      'name' | 'email' | 'phoneNumber' | 'password'
    >,
    Partial<Pick<UserInterface, 'isActive'>> {}