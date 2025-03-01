import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuariosRepository.find({ relations: ['empresa', 'roles'] });
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOne({
      where: { id_usuario: id },
      relations: ['empresa', 'roles'],
    });
  
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
  
    return usuario;
  }

  async create(usuario: Usuario): Promise<Usuario> {
    return await this.usuariosRepository.save(usuario);
  }

  async update(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    await this.usuariosRepository.update(id, usuario);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }
}
