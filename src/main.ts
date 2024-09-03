import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // does not send undefined properties to our controller
    forbidNonWhitelisted: true    // throws an error for each such undef prop
    })
  );
  await app.listen(3000);
}
bootstrap();
