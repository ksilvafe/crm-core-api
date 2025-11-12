import { IntersectionType, PickType } from '@nestjs/swagger'
import { IsBoolean, IsString } from 'class-validator'
import { PipelineCreatableInterface } from '../../core/interfaces/pipeline-creatable.interface'
import { PipelineDto } from './pipeline.dto'

export class CreatePipelineDto
  extends IntersectionType(
    PickType(PipelineDto, ['name', 'description', 'isDefault', 'isActive', 'createdBy']),
  )
  implements PipelineCreatableInterface {}
