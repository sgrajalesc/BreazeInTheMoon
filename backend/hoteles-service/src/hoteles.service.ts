// src/hoteles.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './hotel.entity';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelesService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}

  async create(data: CreateHotelDto): Promise<Hotel> {
    const hotel = this.hotelRepository.create(data);
    return await this.hotelRepository.save(hotel);
  }

  async findAll(): Promise<Hotel[]> {
    return await this.hotelRepository.find();
  }

  async findOne(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepository.findOne({ where: { id } });
    if (!hotel) throw new NotFoundException('Hotel no encontrado');
    return hotel;
  }

  async update(id: number, data: UpdateHotelDto): Promise<Hotel> {
    const hotel = await this.hotelRepository.preload({ id, ...data });
    if (!hotel) throw new NotFoundException('Hotel no encontrado');
    return this.hotelRepository.save(hotel);
  }

  async remove(id: number): Promise<void> {
    const result = await this.hotelRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Hotel no encontrado');
    }
  }
}
