import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { HabitacionesService } from './habitaciones.service';
import { CreateHabitacionDto } from '../dto/create-habitacion.dto';
import { UpdateHabitacionDto } from '../dto/update-habitacion.dto';

@Controller('habitaciones')
export class HabitacionesController {
  constructor(private readonly habitacionService: HabitacionesService) {}

  @Post()
  create(@Body() dto: CreateHabitacionDto) {
    return this.habitacionService.create(dto);
  }

  @Get()
  findAll() {
    return this.habitacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.habitacionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateHabitacionDto) {
    return this.habitacionService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.habitacionService.remove(id);
  }
}
