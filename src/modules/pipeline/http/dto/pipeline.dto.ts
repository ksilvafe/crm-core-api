import { ApiProperty } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'
import { IsBoolean } from 'class-validator'
import { CommonEntityDto } from 'src/common/dto/common-entity.dto'
import { PipelineInterface } from '../../core/interfaces/pipeline-interface'

export class PipelineDto extends CommonEntityDto implements PipelineInterface {
  @ApiProperty({
    title: 'Name',
    description: 'The name of the pipeline.',
  })
  @Expose()
  name!: string
  @ApiProperty({
    title: 'Description',
    description: 'The description of the pipeline.',
  })
  @Expose()
  description!: string
  @ApiProperty({
    title: 'IsDefault',
    description: 'The isDefault of the pipeline.',
  })
  @Expose()
  isDefault!: boolean
  @ApiProperty({
    title: 'isActive',
    description: 'The isActive of the pipeline.',
  })
  @Type(() => Boolean)
  @IsBoolean()
  @Expose()
  isActive!: boolean
  @ApiProperty({
    title: 'created_by',
    description: 'The created_by of the pipeline.',
  })
  @Expose()
  createdBy!: string
}
