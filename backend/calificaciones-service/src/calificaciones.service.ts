import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Calificacion } from './calificacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CalificacionesService {
  constructor(
    @InjectRepository(Calificacion)
    private calificacionRepo: Repository<Calificacion>
  ) {}

  async crearCalificacion(data: {
    hotel: string;
    criterio: string;
    estrellas: number;
  }) {
    const nueva = this.calificacionRepo.create(data);
    return this.calificacionRepo.save(nueva);
  }
}
