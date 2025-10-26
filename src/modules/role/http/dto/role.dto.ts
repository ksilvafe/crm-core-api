import { ApiProperty } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'
import { IsString } from 'class-validator'
import { CommonEntityDto } from 'src/common/dto/common-entity.dto'
import { RoleInterface } from '../../core/interfaces/role.interface'

@Exclude()
export class RoleDto extends CommonEntityDto implements RoleInterface {
  @ApiProperty({
    type: 'string',
    description: 'Username',
  })
  @IsString()
  @Expose()
  name!: string
}
