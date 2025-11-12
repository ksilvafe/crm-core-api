import { CommonEntity } from 'src/common/common.entity'
import { Column, Entity, OneToMany } from 'typeorm'
import { Lead } from '../../lead/core/entities/lead.entity'
import { PipelineInterface } from '../interfaces/pipeline-interface'
import { Stage } from './stage.entity'

@Entity()
export class Pipeline extends CommonEntity implements PipelineInterface {
  @Column({ type: 'citext', nullable: false })
  name!: string

  @Column({ type: 'citext', nullable: true })
  description!: string

  @Column({ default: false, nullable: false })
  isDefault!: boolean

  @Column({ default: true, nullable: false })
  isActive!: boolean

  @Column({ type: 'uuid', nullable: true })
  createdBy!: string

  @OneToMany(
    () => Stage,
    (stage) => stage.pipeline,
  )
  stages: Stage[]

  @OneToMany(
    () => Lead,
    (lead) => lead.pipeline,
  )
  leads: Lead[]
}
