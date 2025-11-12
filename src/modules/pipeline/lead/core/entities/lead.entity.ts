import { CommonEntity } from 'src/common/common.entity'
import { Pipeline } from 'src/modules/pipeline/core/entities/pipeline.entity'
import { Stage } from 'src/modules/pipeline/core/entities/stage.entity'
import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm'
import { LeadInterface } from '../interfaces/lead-interface'

@Entity()
@Unique(['email'])
export class Lead extends CommonEntity implements LeadInterface {
  @Column({ type: 'citext', nullable: false })
  name!: string

  @Column({ type: 'citext', nullable: true })
  email: string

  @Column({ type: 'text', nullable: true })
  phoneNumber: string

  @Column({ type: 'uuid' })
  pipeline_id: string

  @Column({ type: 'uuid' })
  current_stage_id: string

  @ManyToOne(
    () => Pipeline,
    (pipeline) => pipeline.leads,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'pipeline_id' })
  pipeline: Pipeline

  @ManyToOne(
    () => Stage,
    (stage) => stage.leads,
    {
      onDelete: 'RESTRICT',
    },
  )
  @JoinColumn({ name: 'current_stage_id' })
  currentStage: Stage
}
