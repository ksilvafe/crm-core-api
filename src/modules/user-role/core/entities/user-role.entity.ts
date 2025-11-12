import { CommonEntity } from 'src/common/common.entity'
import { Role } from 'src/modules/role/core/entities/role.entity'
import { User } from 'src/modules/user/core/entities/user.entity'
import { Column, Entity, ManyToOne, OneToMany, Unique } from 'typeorm'
import { UserRoleInterface } from '../interfaces/user-role.interface'

@Entity()
@Unique(['userId', 'roleId'])
export class UserRole extends CommonEntity implements UserRoleInterface {
  @Column()
  userId!: string

  @Column()
  roleId!: string

  @ManyToOne(
    () => User,
    (user) => user.userRoles,
  )
  user!: User

  @ManyToOne(
    () => Role,
    (role) => role.userRoles,
  )
  role!: Role
}
