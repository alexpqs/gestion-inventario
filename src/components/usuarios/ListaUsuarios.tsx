import React, { useEffect, useState } from 'react';
import { obtenerUsuarios, eliminarUsuario } from '../../servicios/servicioUsuarios';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const datos = await obtenerUsuarios();
        setUsuarios(datos);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    };

    cargarUsuarios();
  }, []);

  const manejarEliminar = async (id: number) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      try {
        await eliminarUsuario(id);
        setUsuarios(usuarios.filter((usuario) => usuario.id_usuario !== id));
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
      }
    }
  };

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
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id_usuario}>
              <td className="border px-4 py-2">{usuario.id_usuario}</td>
              <td className="border px-4 py-2">{usuario.nombre_completo}</td>
              <td className="border px-4 py-2">{usuario.email}</td>
              <td className="border px-4 py-2">{usuario.telefono}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => manejarEliminar(usuario.id_usuario)}
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

export default ListaUsuarios;