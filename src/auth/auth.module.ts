import { Module } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from 'src/modules/user/user.module'
import { jwtConfig } from 'src/shared/config/jwt-config'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt-strategy'
import { LocalStrategy } from './local-strategy'

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [jwtConfig.KEY],
      useFactory: async (config: ConfigType<typeof jwtConfig>) => config,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
