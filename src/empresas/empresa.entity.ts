import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { Producto } from '../productos/producto.entity';
import { Inventario } from '../inventarios/inventario.entity';



@Entity('empresa')
export class Empresa {
  @PrimaryGeneratedColumn()
  id_empresa: number;

  @Column()
  nombre: string;

  @Column()
  ruc: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  email_contacto: string;

  @Column()
  sector: string;

  @Column({ type: 'datetime' })
  fecha_creacion: Date;

  @Column()
  estado: string;

  @OneToMany(() => Usuario, (usuario) => usuario.empresa)
  usuarios: Usuario[];

  

  @OneToMany(() => Producto, (producto) => producto.empresa)
  productos: Producto[];



  // Agregar la relación con la entidad Inventario
  @OneToMany(() => Inventario, (inventario) => inventario.empresa)
  inventarios: Inventario[];


}
