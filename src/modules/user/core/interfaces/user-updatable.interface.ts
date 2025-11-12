import { UserInterface } from './user-interface'

export type UserUpdatableInterface = Partial<
  Pick<UserInterface, 'name' | 'email' | 'isActive' | 'phoneNumber'>
>
