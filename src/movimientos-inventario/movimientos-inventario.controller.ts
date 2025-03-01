import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MovimientosInventarioService } from './movimientos-inventario.service';
import { MovimientoInventario } from './movimiento-inventario.entity';

@Controller('movimientos-inventario')
export class MovimientosInventarioController {
  constructor(private readonly movimientosInventarioService: MovimientosInventarioService) {}

  @Get()
  async findAll(): Promise<MovimientoInventario[]> {
    return this.movimientosInventarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<MovimientoInventario> {
    return this.movimientosInventarioService.findOne(id);
  }

  @Post()
  async create(@Body() movimiento: MovimientoInventario): Promise<MovimientoInventario> {
    return this.movimientosInventarioService.create(movimiento);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() movimiento: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
    return this.movimientosInventarioService.update(id, movimiento);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.movimientosInventarioService.remove(id);
  }
}
