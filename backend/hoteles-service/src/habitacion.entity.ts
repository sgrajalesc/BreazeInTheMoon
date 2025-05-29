import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Hotel } from './hotel.entity';

@Entity()
export class Habitacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
  capacidad: number;

  @Column('decimal')
  precio: number;

  @Column({ default: true })
  disponible: boolean;

  @ManyToOne(() => Hotel, (hotel) => hotel.habitaciones, { onDelete: 'CASCADE' })
  hotel: Hotel;
}
