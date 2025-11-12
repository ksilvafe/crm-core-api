import { IntersectionType, PartialType, PickType } from '@nestjs/swagger'
import { UserUpdatableInterface } from '../../core/interfaces/user-updatable.interface'
import { CreateUserDto } from './create-user.dto'
import { UserDto } from './user.dto'

export class UpdateUserDto
  extends IntersectionType(
    PartialType(PickType(UserDto, ['name', 'email', 'isActive'])),
    PartialType(PickType(CreateUserDto, ['password'])),
  )
  implements UserUpdatableInterface {}
