import { Test, TestingModule } from '@nestjs/testing'
import { UserRoleService } from '../core/service/user-role.service'
import { UserRoleController } from './user-role.controller'

describe('UserRoleController', () => {
  let controller: UserRoleController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRoleController],
      providers: [UserRoleService],
    }).compile()

    controller = module.get<UserRoleController>(UserRoleController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
