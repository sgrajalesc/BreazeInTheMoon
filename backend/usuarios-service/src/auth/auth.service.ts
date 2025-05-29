import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async login(correo: string, contrasena: string) {
    const user = await this.userRepository.findOne({ where: { correo } });
    if (!user || user.contrasena !== contrasena) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const payload = { sub: user.id, correo: user.correo, rol: user.rol };

    const token = jwt.sign(payload, 'mi_clave_secreta', { expiresIn: '1h' });

    return {
      access_token: token,
      usuario: {
        id: user.id,
        nombre: user.nombre,
        correo: user.correo,
        rol: user.rol,
      },
    };
  }
}
