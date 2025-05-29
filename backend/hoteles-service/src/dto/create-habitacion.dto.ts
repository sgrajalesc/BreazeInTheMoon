import { IsBoolean, IsDecimal, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateHabitacionDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsInt()
  capacidad: number;

  @IsDecimal()
  precio: number;

  @IsBoolean()
  disponible: boolean;

  @IsInt()
  hotelId: number;
}
