import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link
          to="/empresas"
          className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600"
        >
          Gestión de Empresas
        </Link>
        <Link
          to="/usuarios"
          className="bg-green-500 text-white p-4 rounded shadow hover:bg-green-600"
        >
          Gestión de Usuarios
        </Link>
        <Link
          to="/productos"
          className="bg-yellow-500 text-white p-4 rounded shadow hover:bg-yellow-600"
        >
          Gestión de Productos
        </Link>
        <Link
          to="/inventarios"
          className="bg-purple-500 text-white p-4 rounded shadow hover:bg-purple-600"
        >
          Gestión de Inventarios
        </Link>
        <Link
          to="/movimientos"
          className="bg-red-500 text-white p-4 rounded shadow hover:bg-red-600"
        >
          Movimientos de Inventario
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;