import {
  ApiProperty,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/swagger'
import { IsStrongPassword } from 'src/shared/common/decorators/is-strong-password'
import { USER_PASSWORD_MIN_LENGTH } from '../../core/constants/user.constants'
import { UserCreatableInterface } from '../../core/interfaces/user-creatable.interface'
import { UserDto } from './user.dto'

export class CreateUserDto
  extends IntersectionType(
    PickType(UserDto, ['name', 'email', 'phoneNumber']),
    PartialType(PickType(UserDto, ['isActive'])),
  )
  implements UserCreatableInterface
{
  @ApiProperty({
    title: 'Password',
    description:
      'A Strong password that must contain at least one number, one capital letter and one lowercase letter',
    minLength: USER_PASSWORD_MIN_LENGTH,
  })
  @IsStrongPassword()
  password!: string
}
