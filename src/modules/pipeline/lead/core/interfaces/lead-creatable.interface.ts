import { LeadInterface } from './lead-interface'

export interface LeadCreatableInterface
  extends Pick<LeadInterface, 'name' | 'email' | 'phoneNumber'> {}
