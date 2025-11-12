import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Pipeline } from './core/entities/pipeline.entity'
import { Stage } from './core/entities/stage.entity'
import { PipelineService } from './core/service/pipeline.service'
import { PipelineController } from './http/pipeline.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Pipeline, Stage])],
  controllers: [PipelineController],
  providers: [PipelineService],
})
export class PipelineModule {}
