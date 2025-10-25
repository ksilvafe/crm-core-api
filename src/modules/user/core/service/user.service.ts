import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { plainToClass, plainToInstance } from 'class-transformer'
import { Repository } from 'typeorm'
import { CreateUserDto } from '../../http/dto/create-user.dto'
import { UpdateUserDto } from '../../http/dto/update-user.dto'
import { UserDto } from '../../http/dto/user.dto'
import { User } from '../entity/user.entity'

@Injectable()
export class UserService {
  constructor( @InjectRepository(User)
 private repo: Repository<User>) {}
  public async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const user = this.repo.create(createUserDto)
    const dbUser = await this.repo.save(user)
    return plainToInstance(UserDto, dbUser)
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
