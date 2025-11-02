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
import { IsUUIDParam } from 'src/common/decorators/is-strong-password'
import { LeadService } from '../core/service/lead.service'
import { CreateLeadDto } from './dto/create-lead.dto'
import { LeadDto } from './dto/lead.dto'
import { UpdateLeadDto } from './dto/update-lead.dto'

@Controller('lead')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  @ApiOperation({
    operationId: 'lead_create',
    description: 'Endpoint to create a new lead',
  })
  @ApiOkResponse({
    description: 'Success lead created',
  })
  async create(@Body() createLeadDto: CreateLeadDto): Promise<LeadDto> {
    return await this.leadService.create(createLeadDto)
  }

  @Get()
  @ApiOperation({
    operationId: 'Find_All_Leads',
    description: 'Endpoint to create a new lead',
  })
  findAll(): Promise<LeadDto[]> {
    return this.leadService.findAll()
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'lead_findOner',
    description: 'Endpoint to create a new lead',
  })
  @ApiOkResponse({
    description: 'Success lead created',
  })
  @ApiNotFoundResponse({
    description: 'Was not able to find user',
  })
  async findOne(@IsUUIDParam('id') id: string) {
   return await this.leadService.finfOne(id)
  }

   @ApiOperation({
      operationId: 'lead_update',
      description: 'Endpoint to update user',
    })
    @Patch(':id')
    async update(
      @IsUUIDParam('id') id: string,
      @Body() updateLeadDto: UpdateLeadDto
    ) {
      return await this.leadService.update(id, updateLeadDto);
    }

}
