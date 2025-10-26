import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsString } from "class-validator";
import { AuthLoginInterface } from "../../core/interfaces/auth-login.interface";

@Exclude()
export class AuthLoginDto implements AuthLoginInterface {
  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'Email',
  })
  @IsString()
  email!: string;

  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'Password',
  })
  @IsString()
  password!: string;
}