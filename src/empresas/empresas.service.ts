import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';


@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresa)
    private empresasRepository: Repository<Empresa>,
  ) {}

  async findAll(): Promise<Empresa[]> {
    return this.empresasRepository.find({ relations: ['usuarios'] });
  }

  async findOne(id: number): Promise<Empresa> {
    const empresa = await this.empresasRepository.findOne({
      where: { id_empresa: id },
      relations: ['usuarios'],
    });
  
    if (!empresa) {
      throw new NotFoundException(`Empresa con id ${id} no encontrada`);
    }
  
    return empresa;
  }

  async create(empresa: Empresa): Promise<Empresa> {
    return this.empresasRepository.save(empresa);
  }

  async update(id: number, empresa: Partial<Empresa>): Promise<Empresa> {
    await this.empresasRepository.update(id, empresa);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.empresasRepository.delete(id);
  }
}
