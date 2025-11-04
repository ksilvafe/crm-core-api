import { CommonEntity } from 'src/common/common.entity'
import { Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { Lead } from '../../lead/core/entities/lead.entity'
import { Pipeline } from './pipeline.entity'

export class Stage extends CommonEntity {
  @Column({ type: 'uuid', nullable: false })
  pipeline_id: string

  @Column({ type: 'citext', nullable: false })
  name!: string

  @Column()
  order: number

  @Column({ nullable: true })
  description: string

  @ManyToOne(
    () => Pipeline,
    (pipeline) => pipeline.stages,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'pipeline_id' })
  pipeline: Pipeline

  @OneToMany(
    () => Lead,
    (lead) => lead.currentStage,
  )
  leads: Lead[]
}
