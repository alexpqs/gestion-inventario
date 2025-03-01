import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { Empresa } from './empresa.entity';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Get()
  async findAll(): Promise<Empresa[]> {
    return this.empresasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Empresa> {
    return this.empresasService.findOne(id);
  }

  @Post()
  async create(@Body() empresa: Empresa): Promise<Empresa> {
    return this.empresasService.create(empresa);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() empresa: Partial<Empresa>): Promise<Empresa> {
    return this.empresasService.update(id, empresa);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.empresasService.remove(id);
  }
}
