// src/entities/notificacion.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('notificaciones')
export class Notificacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario_id: number;

  @Column()
  mensaje: string;

  @Column({ default: false })
  leido: boolean;

  @CreateDateColumn()
  creado_en: Date;
}
