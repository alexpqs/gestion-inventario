import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm';
import { Categoria } from '../categorias/categoria.entity';
import { Empresa } from '../empresas/empresa.entity';
// import { Proveedor } from '../proveedores/proveedor.entity';
import { MovimientoInventario } from '../movimientos-inventario/movimiento-inventario.entity';
import { Usuario } from '../usuarios/usuario.entity'; // Importa Usuario

@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @Column({ unique: true })
  codigo_barras: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  categoria: Categoria;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_compra: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_venta: number;

  @OneToMany(() => MovimientoInventario, (movimientoInventario) => movimientoInventario.producto)
  movimientosInventario: MovimientoInventario[];

  // Agrega la relación inversa con Usuario
  @ManyToMany(() => Usuario, (usuario) => usuario.productos)
  usuarios: Usuario[];


  @ManyToOne(() => Empresa, (empresa) => empresa.productos)
  empresa: Empresa;

}
