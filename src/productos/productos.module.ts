import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from './producto.entity';
import { Categoria } from '../categorias/categoria.entity';
import { Empresa } from '../empresas/empresa.entity';
//import { Proveedor } from '../proveedores/proveedor.entity';
import { MovimientoInventario } from '../movimientos-inventario/movimiento-inventario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, Categoria, Empresa, MovimientoInventario])],
  providers: [ProductosService],
  controllers: [ProductosController],
  exports: [ProductosService],
})
export class ProductosModule {}
