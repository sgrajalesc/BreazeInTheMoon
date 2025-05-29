// src/dto/create-notificacion.dto.ts
import { IsNotEmpty, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateNotificacionDto {
  @IsNumber()
  usuario_id: number;

  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @IsBoolean()
  leido: boolean;
}
