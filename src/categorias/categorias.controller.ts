import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.entity';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  async findAll(): Promise<Categoria[]> {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Categoria> {
    return this.categoriasService.findOne(id);
  }

  @Post()
  async create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriasService.create(categoria);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() categoria: Partial<Categoria>): Promise<Categoria> {
    return this.categoriasService.update(id, categoria);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.categoriasService.remove(id);
  }
}
