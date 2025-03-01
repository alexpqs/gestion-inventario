import React, { useEffect, useState } from 'react';
import { obtenerMovimientos } from '../../servicios/servicioMovimientos';

const HistorialMovimientos = () => {
  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
    const cargarMovimientos = async () => {
      try {
        const datos = await obtenerMovimientos();
        setMovimientos(datos);
      } catch (error) {
        console.error('Error al cargar movimientos:', error);
      }
    };

    cargarMovimientos();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Historial de Movimientos</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Producto</th>
            <th className="border px-4 py-2">Cantidad</th>
            <th className="border px-4 py-2">Tipo</th>
            <th className="border px-4 py-2">Motivo</th>
            <th className="border px-4 py-2">Fecha</th>
            <th className="border px-4 py-2">Usuario</th>
          </tr>
        </thead>
        <tbody>
          {movimientos.map((movimiento) => (
            <tr key={movimiento.id_movimiento}>
              <td className="border px-4 py-2">{movimiento.id_movimiento}</td>
              <td className="border px-4 py-2">{movimiento.producto?.nombre}</td>
              <td className="border px-4 py-2">{movimiento.cantidad}</td>
              <td className="border px-4 py-2">{movimiento.tipo_movimiento}</td>
              <td className="border px-4 py-2">{movimiento.motivo}</td>
              <td className="border px-4 py-2">{new Date(movimiento.fecha_movimiento).toLocaleString()}</td>
              <td className="border px-4 py-2">{movimiento.usuario?.nombre_completo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorialMovimientos;
