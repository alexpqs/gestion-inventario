import React, { useEffect, useState } from 'react';
import { obtenerEmpresas, eliminarEmpresa } from '../../servicios/servicioEmpresas';

const ListaEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const cargarEmpresas = async () => {
      try {
        const datos = await obtenerEmpresas();
        setEmpresas(datos);
      } catch (error) {
        console.error('Error al cargar empresas:', error);
      }
    };

    cargarEmpresas();
  }, []);

  const manejarEliminar = async (id: number) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta empresa?')) {
      try {
        await eliminarEmpresa(id);
        setEmpresas(empresas.filter((empresa) => empresa.id_empresa !== id));
      } catch (error) {
        console.error('Error al eliminar empresa:', error);
      }
    }
  };

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
            <th className="border px-4 py-2">Estado</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((empresa) => (
            <tr key={empresa.id_empresa}>
              <td className="border px-4 py-2">{empresa.id_empresa}</td>
              <td className="border px-4 py-2">{empresa.nombre}</td>
              <td className="border px-4 py-2">{empresa.ruc}</td>
              <td className="border px-4 py-2">{empresa.telefono}</td>
              <td className="border px-4 py-2">{empresa.estado}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => manejarEliminar(empresa.id_empresa)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaEmpresas;