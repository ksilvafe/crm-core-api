import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PipelineModule } from '../pipeline.module'
import { Lead } from './core/entities/lead.entity'
import { LeadService } from './core/service/lead.service'
import { LeadController } from './http/lead.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Lead]), PipelineModule],
  controllers: [LeadController],
  providers: [LeadService],
})
export class LeadModule {}
