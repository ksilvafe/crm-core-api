import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger'
import { IsUUIDParam } from 'src/common/decorators/is-uuid-params'
import { PipelineService } from '../core/service/pipeline.service'
import { CreatePipelineDto } from './dto/create-pipeline.dto'
import { PipelineDto } from './dto/pipeline.dto'
import { UpdatePipelineDto } from './dto/update-pipeline.dto'

@Controller('pipeline')
export class PipelineController {
  constructor(private readonly pipelineService: PipelineService) {}

  @Post()
  @ApiOperation({
    operationId: 'pipeline_create',
    description: 'Endpoint to create a new pipeline',
  })
  @ApiOkResponse({
    description: 'Success pipeline created',
  })
  async create(
    @Body() createPipelineDto: CreatePipelineDto,
  ): Promise<PipelineDto> {
    return await this.pipelineService.create(createPipelineDto)
  }

  @Get()
  @ApiOperation({
    operationId: 'pipeline_findAll',
    description: 'Endpoint to find all',
  })
  async findAll(): Promise<PipelineDto[]> {
    return await this.pipelineService.findAll()
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'pipeline_findOne',
    description: 'Endpoint to create a new user',
  })
  @ApiOkResponse({
    description: 'Success pipeline created',
  })
  @ApiNotFoundResponse({
    description: 'Was not able to find pipeline',
  })
  async findOne(@IsUUIDParam('id') id: string) {
    return await this.pipelineService.findOne(id)
  }

  @Patch(':id')
  @ApiOperation({
    operationId: 'pipeline_update',
    description: 'Endpoint to update pipeline',
  })
  async update(
    @IsUUIDParam('id') id: string,
    @Body() updatePipelineDto: UpdatePipelineDto,
  ) {
    return await this.pipelineService.update(id, updatePipelineDto)
  }

  @ApiOperation({
    operationId: 'pipeline_delete',
    description: 'Endpoint to delete all',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.pipelineService.remove(id)
  }
}
