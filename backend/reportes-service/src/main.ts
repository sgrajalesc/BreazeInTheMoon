import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3006;
  await app.listen(port);
  console.log(`Reportes Service listo en el puerto ${port}`);
}
bootstrap();
