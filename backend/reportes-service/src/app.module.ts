import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

import { ReportesService } from './reportes.service';
import { ReportesController } from './reportes.controller';
import { Reserva } from './reserva.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Reserva],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Reserva]),
  ],
  controllers: [ReportesController, AppController],
  providers: [ReportesService, AppService],
})
export class AppModule {}
