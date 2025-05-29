import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Reserva } from './reserva.entity';

@Injectable()
export class ReportesService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepo: Repository<Reserva>,
  ) {}

  // Obtener todas las reservas
  async obtenerTodas(): Promise<Reserva[]> {
    return await this.reservaRepo.find();
  }

  // Obtener reservas por un rango de fechas
  async obtenerPorFechas(inicio: string, fin: string): Promise<Reserva[]> {
    return await this.reservaRepo.find({
      where: {
        fecha_inicio: Between(new Date(inicio), new Date(fin)),
      },
    });
  }

  // Obtener total de reservas
  async totalReservas(): Promise<number> {
    return await this.reservaRepo.count();
  }
}
