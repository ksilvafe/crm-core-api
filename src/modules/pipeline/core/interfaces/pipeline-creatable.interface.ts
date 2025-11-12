import { PipelineInterface } from './pipeline-interface'

export interface PipelineCreatableInterface
  extends Pick<
    PipelineInterface,
    'name' | 'description' | 'isDefault' | 'isActive' | 'created_by'
  > {}
