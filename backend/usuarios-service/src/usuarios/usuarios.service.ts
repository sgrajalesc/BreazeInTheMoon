import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(data: CreateUserDto): Promise<User> {
    const correoExiste = await this.userRepository.findOneBy({ correo: data.correo });
    if (correoExiste) {
      throw new ConflictException('El correo ya está en uso');
    }

    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    await this.userRepository.update(id, data);
    return this.findOne(id) as Promise<User>;
  }

  async delete(id: number): Promise<{ deleted: boolean }> {
    const result = await this.userRepository.delete(id);
    return { deleted: !!result.affected && result.affected > 0 };
  }

async findByCorreo(correo: string): Promise<User | null> {
  return this.userRepository.findOne({ where: { correo } });
}

  async login(correo: string, contrasena: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { correo } });
    if (user && user.contrasena === contrasena) {
      return user; // Recuerda usar bcrypt en producción
    }
    return null;

    
  }
}
