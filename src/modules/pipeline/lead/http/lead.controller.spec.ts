import { Test, TestingModule } from '@nestjs/testing'
import { LeadService } from '../core/service/lead.service'
import { LeadController } from './lead.controller'

describe('LeadController', () => {
  let controller: LeadController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadController],
      providers: [LeadService],
    }).compile()

    controller = module.get<LeadController>(LeadController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
