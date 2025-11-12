import { CommonEntityInterface } from 'src/common/interfaces/common-entity.interface'

export interface PipelineInterface extends CommonEntityInterface {
  name?: string
  description?: string
  isDefault?: boolean
  isActive?: boolean
  created_by?: string
}
