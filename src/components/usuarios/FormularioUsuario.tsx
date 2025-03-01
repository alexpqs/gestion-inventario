import React, { useState } from 'react';
import { crearUsuario, actualizarUsuario } from '../../servicios/servicioUsuarios';

const FormularioUsuario = ({ usuarioExistente, onGuardar }: any) => {
  const [usuario, setUsuario] = useState(
    usuarioExistente || { nombre_completo: '', email: '', telefono: '', estado: 'Activo' }
  );

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (usuarioExistente) {
        await actualizarUsuario(usuarioExistente.id_usuario, usuario);
      } else {
        await crearUsuario(usuario);
      }
      onGuardar();
    } catch (error) {
      console.error('Error al guardar usuario:', error);
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Nombre Completo</label>
        <input
          type="text"
          name="nombre_completo"
          value={usuario.nombre_completo}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
        <input
          type="email"
          name="email"
          value={usuario.email}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Teléfono</label>
        <input
          type="text"
          name="telefono"
          value={usuario.telefono}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Guardar
      </button>
    </form>
  );
};

export default FormularioUsuario;