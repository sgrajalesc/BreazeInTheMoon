import { IsDateString } from 'class-validator';

export class FiltroFechasDTO {
  @IsDateString()
  fecha_inicio: string;

  @IsDateString()
  fecha_fin: string;
}
