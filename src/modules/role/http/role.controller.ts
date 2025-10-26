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
import { RoleService } from '../core/service/role.service'
import { CreateRoleDto } from './dto/create-role.dto'
import { RoleDto } from './dto/role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiOperation({
    operationId: 'role_create',
    description: 'Endpoint to create a new role',
  })
  @ApiOkResponse({
    description: 'Success role created',
  })
  async create(@Body() createRoleDto: CreateRoleDto): Promise<RoleDto> {
    return await this.roleService.create(createRoleDto)
  }

  @Get()
  @ApiOperation({
    operationId: 'role_findAll',
    description: 'Endpoint to find all',
  })
  findAll(): Promise<RoleDto[]> {
    return this.roleService.findAll()
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'role_findOne',
    description: 'Endpoint to create a new role',
  })
  @ApiOkResponse({
    description: 'Success role created',
  })
  @ApiNotFoundResponse({
    description: 'Was not able to find role',
  })
  async findOne(@Param('id') id: string) {
    return await this.roleService.findOne(id)
  }

  @ApiOperation({
    operationId: 'role_update',
    description: 'Endpoint to update role',
  })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return await this.roleService.update(id, updateRoleDto)
  }

  @ApiOperation({
    operationId: 'role_delete',
    description: 'Endpoint to delete all',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.roleService.remove(id)
  }
}
