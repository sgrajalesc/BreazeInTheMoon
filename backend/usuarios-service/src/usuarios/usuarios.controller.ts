import { Controller, Post, Body, UnauthorizedException, ConflictException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../user.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('login')
  async login(@Body() body: { correo: string; contrasena: string }) {
    const usuario = await this.usuariosService.login(body.correo, body.contrasena);
    if (!usuario) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return usuario; // Devolvemos el usuario si las credenciales coinciden
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    // Verificamos si ya existe un usuario con ese correo
    const existe = await this.usuariosService.findByCorreo(createUserDto.correo);
    if (existe) {
      throw new ConflictException('El correo ya está en uso');
    }

    return this.usuariosService.create(createUserDto);
  }
}
