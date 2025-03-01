import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventario } from './inventario.entity';

@Injectable()
export class InventariosService {
  constructor(
    @InjectRepository(Inventario)
    private inventariosRepository: Repository<Inventario>,
  ) {}

  async findAll(): Promise<Inventario[]> {
    return await this.inventariosRepository.find({
      relations: ['empresa', 'movimientos'],
    });
  }

  async findOne(id: number): Promise<Inventario> {
    const inventario = await this.inventariosRepository.findOne({
      where: { id_inventario: id },
      relations: ['empresa', 'movimientos'],
    });
  
    if (!inventario) {
      throw new NotFoundException(`Inventario con id ${id} no encontrado`);
    }
  
    return inventario;
  }

  async create(inventario: Inventario): Promise<Inventario> {
    return await this.inventariosRepository.save(inventario);
  }

  async update(id: number, inventario: Partial<Inventario>): Promise<Inventario> {
    await this.inventariosRepository.update(id, inventario);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.inventariosRepository.delete(id);
  }
}
