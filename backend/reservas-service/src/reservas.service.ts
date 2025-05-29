import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepo: Repository<Reserva>,
  ) {}

  async create(data: CreateReservaDto): Promise<Reserva> {
    const reserva = this.reservaRepo.create(data);
    return await this.reservaRepo.save(reserva);
  }

  findAll(): Promise<Reserva[]> {
    return this.reservaRepo.find();
  }

  async findOne(id: number): Promise<Reserva> {
    const reserva = await this.reservaRepo.findOneBy({ id });
    if (!reserva) throw new NotFoundException(`Reserva #${id} no encontrada`);
    return reserva;
  }

  async update(id: number, data: UpdateReservaDto): Promise<Reserva> {
    const reserva = await this.findOne(id);
    Object.assign(reserva, data);
    return await this.reservaRepo.save(reserva);
  }

  async remove(id: number): Promise<void> {
    const result = await this.reservaRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Reserva #${id} no encontrada`);
    }
  }
}
