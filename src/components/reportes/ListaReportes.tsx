import React, { useEffect, useState } from 'react';
import { obtenerReportes } from '../../servicios/servicioReportes';

const ListaReportes = () => {
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    const cargarReportes = async () => {
      try {
        const datos = await obtenerReportes();
        setReportes(datos);
      } catch (error) {
        console.error('Error al cargar reportes:', error);
      }
    };

    cargarReportes();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Gestión de Reportes</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Empresa</th>
            <th className="border px-4 py-2">Tipo</th>
            <th className="border px-4 py-2">Fecha de Generación</th>
            <th className="border px-4 py-2">Usuario</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reportes.map((reporte) => (
            <tr key={reporte.id_reporte}>
              <td className="border px-4 py-2">{reporte.id_reporte}</td>
              <td className="border px-4 py-2">{reporte.empresa?.nombre}</td>
              <td className="border px-4 py-2">{reporte.tipo}</td>
              <td className="border px-4 py-2">{new Date(reporte.fecha_generacion).toLocaleString()}</td>
              <td className="border px-4 py-2">{reporte.usuario?.nombre_completo}</td>
              <td className="border px-4 py-2">
                <a
                  href={reporte.archivo_pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Descargar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaReportes;
