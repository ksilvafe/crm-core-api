import { Test, TestingModule } from '@nestjs/testing'
import { PipelineService } from '../core/service/pipeline.service'
import { PipelineController } from './pipeline.controller'

describe('PipelineController', () => {
  let controller: PipelineController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PipelineController],
      providers: [PipelineService],
    }).compile()

    controller = module.get<PipelineController>(PipelineController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
