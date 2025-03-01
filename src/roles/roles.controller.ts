import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Rol } from './rol.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  async findAll(): Promise<Rol[]> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Rol> {
    return this.rolesService.findOne(id);
  }

  @Post()
  async create(@Body() rol: Rol): Promise<Rol> {
    return this.rolesService.create(rol);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() rol: Partial<Rol>): Promise<Rol> {
    return this.rolesService.update(id, rol);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.rolesService.remove(id);
  }
}
