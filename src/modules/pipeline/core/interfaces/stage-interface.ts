import { CommonEntityInterface } from 'src/common/interfaces/common-entity.interface'

export interface StageInterface extends CommonEntityInterface {
  name: string
  order: number
  description: string
}
