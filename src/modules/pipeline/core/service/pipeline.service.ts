import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { plainToInstance } from 'class-transformer'
import { pipeline } from 'stream'
import { Repository } from 'typeorm'
import { CreatePipelineDto } from '../../http/dto/create-pipeline.dto'
import { PipelineDto } from '../../http/dto/pipeline.dto'
import { UpdatePipelineDto } from '../../http/dto/update-pipeline.dto'
import { Pipeline } from '../entities/pipeline.entity'

@Injectable()
export class PipelineService {
  constructor(
    @InjectRepository(Pipeline)
    private repo: Repository<Pipeline>,
  ) {}
  public async create(createPipeline: CreatePipelineDto): Promise<PipelineDto> {
    try {
      console.log('📥 DTO recebido:', createPipeline);
      const pipe = this.repo.create(createPipeline)
      console.log('📦 Entity criada:', pipe);
      const dbPipe = await this.repo.save(pipe)
       console.log('✅ Salvo no banco:', dbPipe);
      return plainToInstance(PipelineDto, dbPipe)
    } catch (e) {
      console.error('❌ Erro:', e);
      throw new InternalServerErrorException(
        'Error trying to create pipeline',
        e,
      )
    }
  }

  public async findAll(): Promise<PipelineDto[]> {
    const pipe = await this.repo.find({
      relations: [],
    })
    return plainToInstance(PipelineDto, pipe)
  }

  private async findById(id: string): Promise<Pipeline> {
    const pipe = await this.repo.findOne({
      where: { id },
    })
    if (!pipe) throw new NotFoundException()
    return pipe
  }

  public async findOne(id: string): Promise<PipelineDto> {
    const pipe = await this.findById(id)
    return plainToInstance(PipelineDto, pipe)
  }

  public async update(
    id: string,
    updatePipelineDto: UpdatePipelineDto,
  ): Promise<PipelineDto> {
    const pipe = await this.findById(id)
    const newPipe: Pipeline = {
      ...pipe,
      ...updatePipelineDto,
    }
    await this.repo.save(newPipe)
    return plainToInstance(PipelineDto, newPipe)
  }

  public async remove(id: string): Promise<void> {
    const pipe = await this.findById(id)
    await this.repo.remove(pipe)
  }
}
