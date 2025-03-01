const mysql = require('mysql2/promise');

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '1234',
      database: 'gestion_inventario_db',
    });

    console.log('Connected to the MySQL database');

    // Ejecutar consultas aquí
    // Ejemplo: const [rows] = await connection.execute('SELECT * FROM productos');

    await connection.end(); // Cierra la conexión cuando termines
  } catch (err) {
    console.error('Database connection error:', err.message);
  }
}

connectToDatabase();
