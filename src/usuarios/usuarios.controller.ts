import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuariosService.findOne(id);
  }

  @Post()
  async create(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuariosService.create(usuario);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.update(id, usuario);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.usuariosService.remove(id);
  }
}
