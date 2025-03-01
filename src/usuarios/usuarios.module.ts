import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './usuario.entity';
import { Empresa } from '../empresas/empresa.entity';
import { Rol } from '../roles/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Empresa, Rol])],
  providers: [UsuariosService],
  controllers: [UsuariosController],
  exports: [UsuariosService],
})
export class UsuariosModule {}