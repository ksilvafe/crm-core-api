import { Injectable } from '@nestjs/common';
import { CreatePipelineDto } from '../../http/dto/create-pipeline.dto';
import { UpdatePipelineDto } from '../../http/dto/update-pipeline.dto';

@Injectable()
export class PipelineService {
  create(createPipelineDto: CreatePipelineDto) {
    return 'This action adds a new pipeline';
  }

  findAll() {
    return `This action returns all pipeline`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pipeline`;
  }

  update(id: number, updatePipelineDto: UpdatePipelineDto) {
    return `This action updates a #${id} pipeline`;
  }

  remove(id: number) {
    return `This action removes a #${id} pipeline`;
  }
}
