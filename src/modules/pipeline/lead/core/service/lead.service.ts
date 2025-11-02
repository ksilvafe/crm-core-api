import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { plainToInstance } from 'class-transformer'
import { Repository } from 'typeorm'
import { CreateLeadDto } from '../../http/dto/create-lead.dto'
import { LeadDto } from '../../http/dto/lead.dto'
import { UpdateLeadDto } from '../../http/dto/update-lead.dto'
import { Lead } from '../entities/lead.entity'

@Injectable()
export class LeadService {
  constructor(
    @InjectRepository(Lead)
    private lrp: Repository<Lead>,
  ) {}
  public async create(createLeadDto: CreateLeadDto): Promise<LeadDto> {
    try {
      const lead = this.lrp.create(createLeadDto)
      const dbLead = await this.lrp.save(lead)
      return plainToInstance(LeadDto, dbLead)
    } catch (e) {
      throw new InternalServerErrorException('Error creating lead', e)
    }
  }

  public async findAll(): Promise<LeadDto[]> {
    const leads = await this.lrp.find({
    // relations: ['pipeline', 'status'],
    })
    return plainToInstance(LeadDto, leads)
  }

  public async findById(id: string): Promise<Lead> {
   const lead = await this.lrp.findOne({
    where: { id},
    // relations: [''],
   });
   if (!lead) throw new NotFoundException()
    return lead
  }

  public async finfOne(id: string): Promise<LeadDto> {
    const lead = await this.findById(id)
    return plainToInstance(LeadDto, lead)
  }

  public async update(
    id: string,
    updateLeadDto: UpdateLeadDto,
  ): Promise<LeadDto> {
    const lead = await this.findById(id)
    const newLead: Lead = {
      ...lead,
      ...updateLeadDto,
    }
    this.lrp.save(newLead)
    return plainToInstance(LeadDto, newLead)
  }

  public async remove(id: string): Promise<void> {
    const lead = await this.findById(id)
    await this.lrp.remove(lead)
  }
}
