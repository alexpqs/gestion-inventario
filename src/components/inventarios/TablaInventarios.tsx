import React, { useEffect, useState } from 'react';
import { obtenerInventarios } from '../../servicios/servicioInventarios';

const TablaInventarios = () => {
  const [inventarios, setInventarios] = useState([]);

  useEffect(() => {
    const cargarInventarios = async () => {
      try {
        const datos = await obtenerInventarios();
        setInventarios(datos);
      } catch (error) {
        console.error('Error al cargar inventarios:', error);
      }
    };

    cargarInventarios();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Gestión de Inventarios</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Empresa</th>
            <th className="border px-4 py-2">Fecha de Actualización</th>
            <th className="border px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {inventarios.map((inventario) => (
            <tr key={inventario.id_inventario}>
              <td className="border px-4 py-2">{inventario.id_inventario}</td>
              <td className="border px-4 py-2">{inventario.empresa?.nombre}</td>
              <td className="border px-4 py-2">{new Date(inventario.fecha_actualizacion).toLocaleString()}</td>
              <td className="border px-4 py-2">{inventario.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaInventarios;