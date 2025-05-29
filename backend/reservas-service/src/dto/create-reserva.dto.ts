import { IsDateString, IsIn, IsInt } from 'class-validator';

export class CreateReservaDto {
  @IsInt()
  usuario_id: number;

  @IsInt()
  habitacion_id: number;

  @IsDateString()
  fecha_inicio: string;

  @IsDateString()
  fecha_fin: string;

  @IsIn(['pendiente', 'aceptada', 'rechazada'])
  estado: 'pendiente' | 'aceptada' | 'rechazada';
}
