import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { plainToInstance } from 'class-transformer'
import { Repository } from 'typeorm'
import { CreateRoleDto } from '../../http/dto/create-role.dto'
import { RoleDto } from '../../http/dto/role.dto'
import { UpdateRoleDto } from '../../http/dto/update-role.dto'
import { Role } from '../entities/role.entity'

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private repo: Repository<Role>
  ) {}

  public async create(createRole: CreateRoleDto): Promise<RoleDto> {
    const role = this.repo.create(createRole);
    const dbRole = await this.repo.save(role);
    return plainToInstance(RoleDto, dbRole);
  }

  public async findAll(): Promise<RoleDto[]> {
    const roles = await this.repo.find();
    return plainToInstance(RoleDto, roles);
  }

  private async findById(id: string): Promise<Role> {
    const role = await this.repo.findOneBy({
      id,
    });
    if (!role) throw new NotFoundException();
    return role;
  }

  public async findOne(id: string): Promise<RoleDto> {
    const role = await this.findById(id);
    return plainToInstance(RoleDto, role);
  }

  public async update(
    id: string,
    updateRoleDto: UpdateRoleDto
  ): Promise<RoleDto> {
    const role = await this.findById(id);
    const newRole: Role = {
      ...role,
      ...updateRoleDto,
    };
    this.repo.save(newRole);
    return plainToInstance(RoleDto, newRole);
  }

  public async remove(id: string): Promise<void> {
    const role = await this.findById(id);
    await this.repo.remove(role);
  }
}