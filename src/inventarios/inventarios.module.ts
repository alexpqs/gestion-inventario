import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventariosService } from './inventarios.service';
import { InventariosController } from './inventarios.controller';
import { Inventario } from './inventario.entity';
import { Empresa } from '../empresas/empresa.entity';
import { MovimientoInventario } from '../movimientos-inventario/movimiento-inventario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inventario, Empresa, MovimientoInventario])],
  providers: [InventariosService],
  controllers: [InventariosController],
  exports: [InventariosService],
})
export class InventariosModule {}
