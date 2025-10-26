import { User } from 'src/modules/user/core/entities/user.entity'
import { UserRole } from 'src/modules/user-role/core/entities/user-role.entity'
import { CommonEntity } from 'src/shared/common/common.entity'
import { Column, Entity, ManyToMany, OneToMany, Unique } from 'typeorm'
import { RoleInterface } from '../interfaces/role.interface'

@Entity()
@Unique(['name'])
export class Role extends CommonEntity implements RoleInterface {
  @Column()
  name: string

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles!: UserRole[];

  //TODO: One way to do ManyToMany relationship
  // @ManyToMany(() => User, (user) => user.roles)
  // users!: User[];
}
