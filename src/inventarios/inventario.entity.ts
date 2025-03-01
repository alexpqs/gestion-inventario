import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from 'typeorm';
import { Empresa } from '../empresas/empresa.entity';
import { MovimientoInventario } from '../movimientos-inventario/movimiento-inventario.entity';


@Entity('inventario')
export class Inventario {
  @PrimaryGeneratedColumn()
  id_inventario: number;

  @ManyToOne(() => Empresa, (empresa) => empresa.inventarios)
  empresa: Empresa;

  @Column({ type: 'datetime' })
  fecha_actualizacion: Date;

  @OneToMany(() => MovimientoInventario, (movimiento) => movimiento.inventario)
  movimientos: MovimientoInventario[];

    @Column()
    estado: string;
    
}
