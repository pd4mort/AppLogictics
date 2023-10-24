import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v1");

  /**
   * CORS
   */
  app.enableCors({
    origin: 'http://localhost:4200', // Reemplaza con el origen de tu aplicación Angular
  });

  /**
   * validation and transform data for Db
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );


  await app.listen(3000);
}
bootstrap();
