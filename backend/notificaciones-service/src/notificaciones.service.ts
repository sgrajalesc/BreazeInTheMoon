// src/notificaciones.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacion } from './notificacion.entity';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';

@Injectable()
export class NotificacionesService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly notificacionRepo: Repository<Notificacion>,
  ) {}

  create(dto: CreateNotificacionDto) {
    const nueva = this.notificacionRepo.create(dto);
    return this.notificacionRepo.save(nueva);
  }

  findAll() {
    return this.notificacionRepo.find();
  }

  findByUser(usuario_id: number) {
    return this.notificacionRepo.find({ where: { usuario_id } });
  }

  update(id: number, dto: UpdateNotificacionDto) {
    return this.notificacionRepo.update(id, dto);
  }

  remove(id: number) {
    return this.notificacionRepo.delete(id);
  }
}
