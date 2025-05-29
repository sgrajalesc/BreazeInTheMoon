// src/hoteles.controller.ts
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { HotelesService } from './hoteles.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Controller('hoteles')
export class HotelesController {
  constructor(private readonly hotelesService: HotelesService) {}

  @Post()
  create(@Body() dto: CreateHotelDto) {
    return this.hotelesService.create(dto);
  }

  @Get()
  findAll() {
    return this.hotelesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateHotelDto) {
    return this.hotelesService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelesService.remove(+id);
  }
}
