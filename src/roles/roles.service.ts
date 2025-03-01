import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private rolesRepository: Repository<Rol>,
  ) {}

  async findAll(): Promise<Rol[]> {
    return await this.rolesRepository.find({ relations: ['usuarios'] });
  }

  async findOne(id: number): Promise<Rol> {
    const rol = await this.rolesRepository.findOne({
      where: { id_rol: id },
      relations: ['usuarios'],
    });
  
    if (!rol) {
      throw new NotFoundException(`Rol con id ${id} no encontrado`);
    }
  
    return rol;
  }

  async create(rol: Rol): Promise<Rol> {
    return await this.rolesRepository.save(rol);
  }

  async update(id: number, rol: Partial<Rol>): Promise<Rol> {
    await this.rolesRepository.update(id, rol);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.rolesRepository.delete(id);
  }
}
