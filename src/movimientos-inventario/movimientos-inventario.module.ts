import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientosInventarioService } from './movimientos-inventario.service';
import { MovimientosInventarioController } from './movimientos-inventario.controller';
import { MovimientoInventario } from './movimiento-inventario.entity';
import { Producto } from '../productos/producto.entity';
import { Inventario } from '../inventarios/inventario.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientoInventario, Producto, Inventario, Usuario])],
  providers: [MovimientosInventarioService],
  controllers: [MovimientosInventarioController],
  exports: [MovimientosInventarioService],
})
export class MovimientosInventarioModule {}
