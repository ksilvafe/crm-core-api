import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PipelineService } from './core/service/pipeline.service'
import { PipelineController } from './http/pipeline.controller'

@Module({
  imports: [TypeOrmModule.forFeature([PipelineModule])],
  controllers: [PipelineController],
  providers: [PipelineService],
})
export class PipelineModule {}
