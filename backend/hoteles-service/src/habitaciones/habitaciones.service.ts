import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habitacion } from '../habitacion.entity';
import { CreateHabitacionDto } from '../dto/create-habitacion.dto';
import { UpdateHabitacionDto } from '../dto/update-habitacion.dto';
import { Hotel } from '../hotel.entity';

@Injectable()
export class HabitacionesService {
  constructor(
    @InjectRepository(Habitacion)
    private habitacionRepo: Repository<Habitacion>,
    @InjectRepository(Hotel)
    private hotelRepo: Repository<Hotel>,
  ) {}

  async create(dto: CreateHabitacionDto): Promise<Habitacion> {
    const hotel = await this.hotelRepo.findOneBy({ id: dto.hotelId });
    if (!hotel) throw new NotFoundException('Hotel no encontrado');

    const habitacion = this.habitacionRepo.create({
      ...dto,
      hotel,
    });

    return this.habitacionRepo.save(habitacion);
  }

  findAll(): Promise<Habitacion[]> {
    return this.habitacionRepo.find({ relations: ['hotel'] });
  }

  async findOne(id: number): Promise<Habitacion> {
    const habitacion = await this.habitacionRepo.findOne({ where: { id }, relations: ['hotel'] });
    if (!habitacion) throw new NotFoundException('Habitación no encontrada');
    return habitacion;
  }

  async update(id: number, dto: UpdateHabitacionDto): Promise<Habitacion> {
    const habitacion = await this.habitacionRepo.findOneBy({ id });
    if (!habitacion) throw new NotFoundException('Habitación no encontrada');

    Object.assign(habitacion, dto);
    return this.habitacionRepo.save(habitacion);
  }

  async remove(id: number): Promise<void> {
    const result = await this.habitacionRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Habitación no encontrada');
  }
}
