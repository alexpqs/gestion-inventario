import React, { useEffect, useState } from 'react';
import api from '../servicios/api';

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const obtenerEmpresas = async () => {
      try {
        const respuesta = await api.get('/empresas');
        setEmpresas(respuesta.data);
      } catch (error) {
        console.error('Error al obtener empresas:', error);
      }
    };

    obtenerEmpresas();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Gestión de Empresas</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">RUC</th>
            <th className="border px-4 py-2">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((empresa) => (
            <tr key={empresa.id_empresa}>
              <td className="border px-4 py-2">{empresa.id_empresa}</td>
              <td className="border px-4 py-2">{empresa.nombre}</td>
              <td className="border px-4 py-2">{empresa.ruc}</td>
              <td className="border px-4 py-2">{empresa.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Empresas;