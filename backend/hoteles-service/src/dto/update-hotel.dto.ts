// src/dto/update-hotel.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelDto } from './create-hotel.dto';

export class UpdateHotelDto extends PartialType(CreateHotelDto) {}
