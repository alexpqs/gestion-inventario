import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasModule } from './empresas/empresas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { MovimientosInventarioModule } from './movimientos-inventario/movimientos-inventario.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ✅ Importa variables de entorno
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: process.env.NODE_ENV !== 'production', // Evita en producción
      }),
    }),
    EmpresasModule,
    UsuariosModule,
    RolesModule,
    CategoriasModule,
    ProductosModule,
    InventariosModule,
    MovimientosInventarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
