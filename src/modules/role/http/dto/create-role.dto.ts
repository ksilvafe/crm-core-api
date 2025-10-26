import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({
    type: 'string',
    description: 'Role name',
  })
  @IsString()
  name!: string;
}