import { Controller, Post, Body } from '@nestjs/common';
import { CalificacionesService } from './calificaciones.service';

@Controller('calificaciones')
export class CalificacionesController {
  constructor(private readonly calificacionesService: CalificacionesService) {}

  @Post()
  crearCalificacion(@Body() body: { hotel: string; criterio: string; estrellas: number }) {
    return this.calificacionesService.crearCalificacion(body);
  }
}
