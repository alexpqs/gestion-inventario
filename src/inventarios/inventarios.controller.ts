import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { Inventario } from './inventario.entity';


@Controller('inventarios')
export class InventariosController {
  constructor(private readonly inventariosService: InventariosService) {}

  @Get()
  async findAll(): Promise<Inventario[]> {
    return this.inventariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Inventario> {
    return this.inventariosService.findOne(id);
  }

  @Post()
  async create(@Body() inventario: Inventario): Promise<Inventario> {
    return this.inventariosService.create(inventario);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() inventario: Partial<Inventario>): Promise<Inventario> {
    return this.inventariosService.update(id, inventario);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.inventariosService.remove(id);
  }
}
