import { Module } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { jwtConfig } from 'src/config/jwt-config'
import { UserModule } from 'src/modules/user/user.module'
import { AuthService } from './core/service/auth.service'
import { JwtStrategy } from './core/service/jwt-strategy'
import { LocalStrategy } from './core/service/local-strategy'
import { AuthController } from './http/auth.controller'

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
