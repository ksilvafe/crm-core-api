import { CommonEntity } from 'src/common/common.entity'
import { Role } from 'src/modules/role/core/entities/role.entity'
import { UserRole } from 'src/modules/user-role/core/entities/user-role.entity'
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  Unique,
} from 'typeorm'
import { UserInterface } from '../interfaces/user-interface'

@Entity()
@Unique(['email'])
export class User extends CommonEntity implements UserInterface {
  @Column({ type: 'citext', nullable: false })
  name!: string

  @Column({ type: 'citext', nullable: true })
  email: string

  @Column({ type: 'text', nullable: false })
  password: string

  @Column({ type: 'text', nullable: true, default: null })
  salt: string

  @Column({ type: 'text', nullable: true })
  phoneNumber: string

  @Column({ default: true, nullable: false })
  isActive: boolean

  @Column({ type: 'uuid', nullable: true })
  resetToken: string | null

  @Column({ type: 'timestamp', nullable: true })
  resetTokenExp: Date | null

  @OneToMany(
    () => UserRole,
    (userRole) => userRole.user,
  )
  userRoles?: UserRole[]

  // @ManyToMany(
  //   () => Role,
  //   (role) => role.users,
  //   {
  //     cascade: true,
  //   },
  // )
  // @JoinTable()
  // roles: Role[]
}
