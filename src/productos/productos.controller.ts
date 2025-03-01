import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Producto> {
    return this.productosService.findOne(id);
  }

  @Post()
  async create(@Body() producto: Producto): Promise<Producto> {
    return this.productosService.create(producto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() producto: Partial<Producto>): Promise<Producto> {
    return this.productosService.update(id, producto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.productosService.remove(id);
  }
}
