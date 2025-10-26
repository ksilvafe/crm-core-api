import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRole } from './core/entities/user-role.entity'
import { UserRoleService } from './core/service/user-role.service'
import { UserRoleController } from './http/user-role.controller'

@Module({
  imports: [TypeOrmModule.forFeature([UserRole])],
  controllers: [UserRoleController],
  providers: [UserRoleService],
})
export class UserRoleModule {}
