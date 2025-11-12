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
  ApiTags,
} from '@nestjs/swagger'
import { UserRoleService } from '../core/service/user-role.service'
import { CreateUserRoleDto } from './dto/create-user-role.dto'
import { UserRoleDto } from './dto/user-role.dto'

@ApiTags('User-role')
@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userUserRolesService: UserRoleService) {}

  @Post()
  @ApiOperation({
    operationId: 'userUserRole_create',
    description: 'Endpoint to create a new userUserRole',
  })
  @ApiOkResponse({
    description: 'Success userUserRole created',
  })
  async create(
    @Body() createUserRoleDto: CreateUserRoleDto,
  ): Promise<UserRoleDto> {
    return await this.userUserRolesService.create(createUserRoleDto)
  }

  @Get()
  @ApiOperation({
    operationId: 'userUserRole_findAll',
    description: 'Endpoint to find all',
  })
  async findAll(): Promise<UserRoleDto[]> {
    return await this.userUserRolesService.findAll()
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'userUserRole_findOne',
    description: 'Endpoint to create a new userUserRole',
  })
  @ApiOkResponse({
    description: 'Success userUserRole created',
  })
  @ApiNotFoundResponse({
    description: 'Was not able to find userUserRole',
  })
  async findOne(@Param('id') id: string) {
    return await this.userUserRolesService.findOne(id)
  }

  @ApiOperation({
    operationId: 'userUserRole_delete',
    description: 'Endpoint to delete all',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userUserRolesService.remove(id)
  }
}
