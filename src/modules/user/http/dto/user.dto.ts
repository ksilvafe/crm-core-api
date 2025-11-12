import { ApiProperty } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'
import {
  IsBoolean,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'
import { CommonEntityDto } from 'src/common/dto/common-entity.dto'
import {
  USER_EMAIL_MAX_LENGTH,
  USER_EMAIL_MIN_LENGTH,
  USER_NAME_MAX_LENGTH,
  USER_NAME_MIN_LENGTH,
} from '../../core/constants/user.constants'
import { UserInterface } from '../../core/interfaces/user-interface'

export class UserDto
  extends CommonEntityDto
  implements Omit<UserInterface, 'salt' | 'password'>
{
  @ApiProperty({
    title: 'Username',
    description: 'The username of user.',
    minLength: USER_NAME_MIN_LENGTH,
    maxLength: USER_NAME_MAX_LENGTH,
  })
  @IsString()
  @MinLength(USER_NAME_MIN_LENGTH)
  @MaxLength(USER_NAME_MAX_LENGTH)
  @Expose()
  name!: string
  @ApiProperty({
    title: 'Email',
    description: 'The email user.',
    minLength: USER_EMAIL_MIN_LENGTH,
    maxLength: USER_EMAIL_MAX_LENGTH,
  })
  @IsEmail()
  @MinLength(USER_EMAIL_MIN_LENGTH)
  @MaxLength(USER_EMAIL_MAX_LENGTH)
  @Expose()
  email!: string

  @ApiProperty({
    title: 'Phone Number',
    description: 'The phone number of user.',
  })
  @IsString()
  @Expose()
  phoneNumber!: string

  @ApiProperty({
    title: 'Active',
    description: 'The flag to inform if user is active or not.',
  })
  @Expose()
  @IsBoolean()
  @Type(() => Boolean)
  isActive!: boolean
}
