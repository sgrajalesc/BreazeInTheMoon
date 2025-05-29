import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Calificacion {
  @PrimaryGeneratedColumn()
  id: number;

@Column({ nullable: false })
hotel: string;

@Column({ nullable: false })
criterio: string;

@Column({ nullable: false })
estrellas: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
