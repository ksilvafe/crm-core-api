import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://local_user:local_password@localhost:5432/local_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      subscribers: [],
      synchronize: true,
      autoLoadEntities: true,
      logger: 'file',
      logging: true,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
