import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Producto } from '../productos/producto.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('categoria')
export class Categoria {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ type: 'datetime' })
  fecha_creacion: Date;

  @ManyToMany(() => Producto, (producto) => producto.categoria)
  productos: Producto[];

  // Agrega la relación inversa con Usuario
  @ManyToMany(() => Usuario, (usuario) => usuario.categorias)
  usuarios: Usuario[];
}
