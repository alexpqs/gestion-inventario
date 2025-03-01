import React, { useEffect, useState } from 'react';
import api from '../servicios/api';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const respuesta = await api.get('/usuarios');
        setUsuarios(respuesta.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id_usuario}>
              <td className="border px-4 py-2">{usuario.id_usuario}</td>
              <td className="border px-4 py-2">{usuario.nombre_completo}</td>
              <td className="border px-4 py-2">{usuario.email}</td>
              <td className="border px-4 py-2">{usuario.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;