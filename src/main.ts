import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { swagger } from './shared/common/doc/swagger'
import { serverConfig } from './shared/config/server.config'

async function bootstrap() {
  const appServerConfig = serverConfig()
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())

  swagger(app, appServerConfig.environment)
  await app.listen(3000)
}
bootstrap()
