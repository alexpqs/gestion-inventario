import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';


@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriasRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return await this.categoriasRepository.find({ relations: ['productos'] });
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriasRepository.findOne({
      where: { id_categoria: id },
      relations: ['productos'],
    });

    if (!categoria) {
      throw new NotFoundException(`Categoría con id ${id} no encontrada`);
    }

    return categoria;
  }

  async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriasRepository.save(categoria);
  }

  async update(id: number, categoria: Partial<Categoria>): Promise<Categoria> {
    await this.categoriasRepository.update(id, categoria);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.categoriasRepository.delete(id);
  }
 
  
}
