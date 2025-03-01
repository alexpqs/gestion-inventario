import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';


@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) {}

  async findAll(): Promise<Producto[]> {
    return await this.productosRepository.find({
      relations: ['categoria', 'empresa', 'proveedor', 'movimientosInventario'],
    });
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productosRepository.findOne({
      where: { id_producto: id },
      relations: ['categoria', 'empresa', 'proveedor', 'movimientosInventario'],
    });
  
    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
  
    return producto;
  }
  async create(producto: Producto): Promise<Producto> {
    return await this.productosRepository.save(producto);
  }

  async update(id: number, producto: Partial<Producto>): Promise<Producto> {
    await this.productosRepository.update(id, producto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productosRepository.delete(id);
  }


}
