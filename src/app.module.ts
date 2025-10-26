import { Module } from '@nestjs/common'
import { ConfigModule, ConfigType } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { RoleModule } from './modules/role/role.module'
import { UserModule } from './modules/user/user.module'
import { UserRoleModule } from './modules/user-role/user-role.module'
import { jwtConfig } from './shared/config/jwt-config'
import sampleConfig from './shared/config/sample.config'
import { typeormConfig } from './shared/config/typeorm.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig, sampleConfig, jwtConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [typeormConfig.KEY],
      useFactory: async (config: ConfigType<typeof typeormConfig>) => config,
    }),
    UserModule,
    RoleModule,
    UserRoleModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
