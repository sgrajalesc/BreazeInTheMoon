import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calificacion } from './calificacion.entity';
import { CalificacionesService } from './calificaciones.service';
import { CalificacionesController } from './calificaciones.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalificacionesModule } from './calificaciones.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    CalificacionesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Calificacion],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Calificacion]),
  ],
  controllers: [CalificacionesController, AppController],
  providers: [CalificacionesService, AppService],
})
export class AppModule {}
