import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MovimientoInventario } from './movimiento-inventario.entity';

@Injectable()
export class MovimientosInventarioService {
  constructor(
    @InjectRepository(MovimientoInventario)
    private movimientoInventarioRepository: Repository<MovimientoInventario>,
  ) {}

  async findAll(): Promise<MovimientoInventario[]> {
    return await this.movimientoInventarioRepository.find({
      relations: ['producto', 'inventario', 'usuario'],
    });
  }

  async findOne(id: number): Promise<MovimientoInventario> {
    const movimiento = await this.movimientoInventarioRepository.findOne({
      where: { id_movimiento: id },
      relations: ['producto', 'inventario', 'usuario'],
    });
  
    if (!movimiento) {
      throw new NotFoundException(`Movimiento de inventario con id ${id} no encontrado`);
    }
  
    return movimiento;
  }

  async create(movimiento: MovimientoInventario): Promise<MovimientoInventario> {
    return await this.movimientoInventarioRepository.save(movimiento);
  }

  async update(id: number, movimiento: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
    await this.movimientoInventarioRepository.update(id, movimiento);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.movimientoInventarioRepository.delete(id);
  }
}
