import { Controller, Get, Query } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { Reserva } from './reserva.entity';

@Controller('reportes')
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}

  @Get()
  getAll(): Promise<Reserva[]> {
    return this.reportesService.obtenerTodas();
  }

  @Get('fechas')
  getByFechas(
    @Query('inicio') inicio: string,
    @Query('fin') fin: string,
  ): Promise<Reserva[]> {
    return this.reportesService.obtenerPorFechas(inicio, fin);
  }

  @Get('total')
  getTotal(): Promise<number> {
    return this.reportesService.totalReservas();
  }
}
