import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './reserva.entity';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

dotenv.config();

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
  controllers: [ReservasController, AppController],
  providers: [ReservasService, AppService],
})
export class AppModule {}
