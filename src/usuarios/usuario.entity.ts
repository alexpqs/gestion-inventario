import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    ManyToMany,
    OneToMany,
    JoinTable,
  } from 'typeorm';
  import { Empresa } from '../empresas/empresa.entity';
  import { Rol } from '../roles/rol.entity';
  //import { Inventario } from '../inventarios/inventario.entity';
  import { MovimientoInventario } from '../movimientos-inventario/movimiento-inventario.entity';
  import { Producto } from '../productos/producto.entity';
  import { Categoria } from '../categorias/categoria.entity';
  
  @Entity('usuario')
  export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number;
  
    @Column()
    nombre_completo: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    telefono: string;
  
    @Column()
    estado: string;
  
    @Column({ type: 'datetime' })
    fecha_creacion: Date;
  
    @Column({ type: 'datetime', nullable: true })
    ultima_conexion: Date;
  
    @Column()
    password_hash: string;
  
    @ManyToOne(() => Empresa, (empresa) => empresa.usuarios)
    empresa: Empresa;
  
    @ManyToMany(() => Rol)
    @JoinTable({
      name: 'usuario_rol',
      joinColumn: { name: 'id_usuario', referencedColumnName: 'id_usuario' },
      inverseJoinColumn: { name: 'id_rol', referencedColumnName: 'id_rol' },
    })
    roles: Rol[];
  
    // Relación con MovimientoInventario
    @OneToMany(() => MovimientoInventario, (movimientoInventario) => movimientoInventario.usuario)
    movimientosInventario: MovimientoInventario[];
  
     // Relación con Producto
    @ManyToMany(() => Producto, (producto) => producto.usuarios)
    @JoinTable({
      name: 'usuario_producto',
      joinColumn: { name: 'id_usuario', referencedColumnName: 'id_usuario' },
      inverseJoinColumn: { name: 'id_producto', referencedColumnName: 'id_producto' },
    })
    productos: Producto[];
  
    // Relación con Categoria
    @ManyToMany(() => Categoria, (categoria) => categoria.usuarios)
    @JoinTable({
      name: 'usuario_categoria',
      joinColumn: { name: 'id_usuario', referencedColumnName: 'id_usuario' },
      inverseJoinColumn: { name: 'id_categoria', referencedColumnName: 'id_categoria' },
    })
    categorias: Categoria[];
  }
  