import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // swagger start
  const config = new DocumentBuilder()
    .setTitle('Swagger Prime')
    .setDescription('Prime Swagger API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // swagger end
  await app.listen(3000);
}
bootstrap().then();
