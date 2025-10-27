import 'newrelic';
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { swagger } from './common/doc/swagger'
import { serverConfig } from './config/server.config'

async function bootstrap() {
  const appServerConfig = serverConfig()
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())

  swagger(app, appServerConfig.environment)
  await app.listen(3000)
}
bootstrap()
