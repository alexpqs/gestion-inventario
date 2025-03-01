# Aplicación PWA gestion-inventario

## Integrantes:

### Alex Patricio Quishpe Salgado
### Marco Antonio Chacón Yépez 

## Descripción General

**gestion-inventario** es una aplicación PWA progresiva de gestión de inventarios diseñada para optimizar la administración de productos, usuarios, roles, empresas y movimientos de inventario. La aplicación utiliza tecnologías modernas como PrimeReact, NestJS, NextJS, Zustand, Axios, Bootstrap y React Query.

## Tecnologías Utilizadas

- **Frontend:** NextJS, PrimeReact, Zustand, Axios, Bootstrap, React Query
- **Backend:** NestJS
- **Base de Datos:** PostgreSQL
- **Autenticación:** JWT (JSON Web Tokens)


##¿Cómo usar ejecutar esta aplicación?
### Clonar el repositorio
git clone https://github.com/tuusuario/gestion-inventario.git
cd gestion-inventario

### Instalar dependencias del backend
cd backend
npm install

### Instalar dependencias del frontend
cd ../frontend
npm install

### Configurar la base de datos
 Crear un archivo .env en el directorio backend con la configuración de la base de datos
echo "DB_HOST=localhost
DB_PORT=3306
DB_USER=""
DB_PASSWORD=""
DB_NAME=gestion_inventario_db" > backend/.env

## Iniciar el backend
cd backend 
npm run start:dev

## Iniciar el frontend
cd ../frontend
npm run dev

## Descripción de la aplicación
Para mantener una disponibilidad garantizada de un producto para entrega rápida al cliente las empresas han tenido que recurrir a la innovación tanto en procesos como en tecnología. La globalización del comercio y el aumento de la demanda ofrecen oportunidades de negocio para que las empresas o fábricas implementen un sistema informático similar a un CRM o ERP que permita brindar un servicio oportuno y eficiente.

## Actores involucrados
- fábricas
- empresas logísticas
- clientes
- vendedores

## Entidades
-Usuario: persona que maneja el sistema MVP
-Producto: Entidad de la que se desea ingresar y obtener información
-Empresa:  La entidad que maneja los productos y los usuarios
-Inventario: Registo de existencias o productos en tiempo presente.
-Movimiento_Inventario: Entradas y Salidas de los productos, flujo del negocio.

## Usabilidad 
Acceder a la aplicación: Abrir el navegador web y navegar a http://localhost:3000.

Registrar un nuevo usuario: Utilizar el formulario de registro en la página principal.

Iniciar sesión: Utilizar el formulario de inicio de sesión con las credenciales registradas.

Dashboard: Visualizar información general sobre el inventario y los movimientos.

Usuarios: Gestionar usuarios, roles y permisos.

Productos: Añadir, editar y eliminar productos del inventario.

Inventario: Consultar el stock de los productos.

Movimientos: Registrar y consultar movimientos de entrada y salida del inventario.



