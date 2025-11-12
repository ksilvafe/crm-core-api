import { CommonEntityInterface } from 'src/common/interfaces/common-entity.interface'

export interface LeadInterface extends CommonEntityInterface {
  name?: string
  email?: string
  phoneNumber?: string
}
