import { ApiProperty } from '@nestjs/swagger'
import { IsUUID } from 'class-validator'
import { CommonEntityDto } from 'src/common/dto/common-entity.dto'
import { UserRoleInterface } from '../../core/interfaces/user-role.interface'

export class UserRoleDto extends CommonEntityDto implements UserRoleInterface {
  @ApiProperty({ format: 'uuid' })
  @IsUUID()
  userId!: string

  @ApiProperty({ format: 'uuid' })
  @IsUUID()
  roleId!: string
}
