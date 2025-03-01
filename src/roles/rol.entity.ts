import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @ManyToMany(() => Usuario, (usuario) => usuario.roles)
  usuarios: Usuario[];
}

