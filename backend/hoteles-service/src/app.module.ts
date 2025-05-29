import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './hotel.entity';
import { Habitacion } from './habitacion.entity';
import { HotelesService } from './hoteles.service';
import { HotelesController } from './hoteles.controller';
import { HabitacionesService } from './habitaciones/habitaciones.service';
import { HabitacionesController } from './habitaciones/habitaciones.controller';
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
      entities: [Hotel, Habitacion],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Hotel, Habitacion])
  ],
  controllers: [HotelesController, HabitacionesController, AppController],
  providers: [HotelesService, HabitacionesService, AppService],
})
export class AppModule {}
