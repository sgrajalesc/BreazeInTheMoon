// src/notificaciones.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';

@Controller('notificaciones')
export class NotificacionesController {
  constructor(private readonly servicio: NotificacionesService) {}

  @Post()
  create(@Body() dto: CreateNotificacionDto) {
    return this.servicio.create(dto);
  }

  @Get()
  findAll() {
    return this.servicio.findAll();
  }

  @Get('usuario/:id')
  findByUser(@Param('id') id: number) {
    return this.servicio.findByUser(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateNotificacionDto) {
    return this.servicio.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.servicio.remove(id);
  }
}
