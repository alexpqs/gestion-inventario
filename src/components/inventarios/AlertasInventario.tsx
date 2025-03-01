import React, { useEffect, useState } from 'react';
import { obtenerAlertasStock } from '../../servicios/servicioInventarios';

const AlertasInventario = () => {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    const cargarAlertas = async () => {
      try {
        const datos = await obtenerAlertasStock();
        setAlertas(datos);
      } catch (error) {
        console.error('Error al cargar alertas de inventario:', error);
      }
    };

    cargarAlertas();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Alertas de Inventario</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="border px-4 py-2">Producto</th>
            <th className="border px-4 py-2">Nivel Mínimo</th>
            <th className="border px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {alertas.map((alerta) => (
            <tr key={alerta.id_alerta}>
              <td className="border px-4 py-2">{alerta.producto?.nombre}</td>
              <td className="border px-4 py-2">{alerta.nivel_minimo}</td>
              <td className="border px-4 py-2">{alerta.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertasInventario;