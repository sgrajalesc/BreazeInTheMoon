import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ReporteBasico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hotelId: number;

  @Column()
  fecha: Date;

  @Column()
  totalReservas: number;

  @Column()
  habitacionesOcupadas: number;
}
