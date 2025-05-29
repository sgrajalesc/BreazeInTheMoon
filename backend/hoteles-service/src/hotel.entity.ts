// src/hotel.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Habitacion } from './habitacion.entity';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  ciudad: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ name: 'propietario_id', nullable: true })
  propietarioId: number;

  @CreateDateColumn({ name: 'creado_en' })
  creadoEn: Date;

  @OneToMany(() => Habitacion, (habitacion) => habitacion.hotel)
  habitaciones: Habitacion[];
}
