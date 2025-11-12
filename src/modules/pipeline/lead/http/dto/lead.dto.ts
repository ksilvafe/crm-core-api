import { ApiProperty } from '@nestjs/swagger'
import { CommonEntityDto } from 'src/common/dto/common-entity.dto'

export class LeadDto extends CommonEntityDto {
  @ApiProperty({
    title: 'Name',
    description: 'The name of the lead.',
  })
  name?: string
  @ApiProperty({
    title: 'Email',
    description: 'The email of the lead.',
  })
  email?: string
  @ApiProperty({
    title: 'Phone Number',
    description: 'The phone number of the lead.',
  })
  phoneNumber?: string
}
