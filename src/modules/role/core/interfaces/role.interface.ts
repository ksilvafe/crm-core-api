import { CommonEntityInterface } from 'src/common/interfaces/common-entity.interface'
import { User } from 'src/modules/user/core/entities/user.entity'
import { ManyToMany } from 'typeorm'

export interface RoleInterface extends CommonEntityInterface {
  name: string
}
