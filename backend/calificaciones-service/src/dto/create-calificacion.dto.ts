import { IsInt, IsNotEmpty, IsOptional, IsString, Min, Max } from 'class-validator';

export class CreateCalificacionDto {
  @IsInt()
  @IsNotEmpty()
  usuario_id: number;

  @IsInt()
  @IsNotEmpty()
  hotel_id: number;

  @IsInt()
  @Min(1)
  @Max(5)
  puntuacion: number;

  @IsOptional()
  @IsString()
  comentario?: string;
}
