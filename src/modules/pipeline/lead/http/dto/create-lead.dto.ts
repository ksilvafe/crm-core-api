import { IntersectionType, PickType } from '@nestjs/swagger'
import { LeadCreatableInterface } from '../../core/interfaces/lead-creatable.interface'
import { LeadDto } from './lead.dto'

export class CreateLeadDto
  extends IntersectionType(PickType(LeadDto, ['name', 'email', 'phoneNumber']))
  implements LeadCreatableInterface {}
