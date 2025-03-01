import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Producto } from '../productos/producto.entity';
import { Inventario } from '../inventarios/inventario.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('movimiento_inventario')
export class MovimientoInventario {
  @PrimaryGeneratedColumn()
  id_movimiento: number;

  @ManyToOne(() => Producto, (producto) => producto.movimientosInventario)
  producto: Producto;

  @ManyToOne(() => Inventario, (inventario) => inventario.movimientos)
  inventario: Inventario;

  @Column()
  tipo_movimiento: string; // 'entrada', 'salida' o 'ajuste'

  @Column()
  cantidad: number;

  @Column({ type: 'datetime' })
  fecha_movimiento: Date;

  @Column()
  motivo: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.movimientosInventario)
  usuario: Usuario;

  @Column('decimal', { precision: 10, scale: 2 })
  costo_unitario: number;

  @Column()
  ubicacion: string;
}
