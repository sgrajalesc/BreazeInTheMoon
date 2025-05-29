import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @MinLength(6)
  contrasena: string;
}
