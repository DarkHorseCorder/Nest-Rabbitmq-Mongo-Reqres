import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Nest.JS + RabbitMQ + MongoDB Tech Assessment by Vladislav')
      .setDescription(
        'Create a simple REST application from scratch using Nest.js (TypeScript over 3.4), RabbitMQ over 3.7, MongoDB over 4.4 and integration with ReqResAPI.',
      )
      .setVersion('1.0')
      .build(),
  );
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
