import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  
  //Habilita CORS
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true, // si necesitas enviar cookies o headers de autenticación
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Usuarios Service listo en puerto ${port}`);
}
bootstrap();
