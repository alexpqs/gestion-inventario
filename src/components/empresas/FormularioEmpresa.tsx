import React, { useState } from 'react';
import { crearEmpresa, actualizarEmpresa } from '../../servicios/servicioEmpresas';

const FormularioEmpresa = ({ empresaExistente, onGuardar }: any) => {
  const [empresa, setEmpresa] = useState(
    empresaExistente || { nombre: '', ruc: '', direccion: '', telefono: '', email_contacto: '', sector: '', estado: 'activo' }
  );

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmpresa({ ...empresa, [name]: value });
  };

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (empresaExistente) {
        await actualizarEmpresa(empresaExistente.id_empresa, empresa);
      } else {
        await crearEmpresa(empresa);
      }
      onGuardar();
    } catch (error) {
      console.error('Error al guardar empresa:', error);
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={empresa.nombre}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">RUC</label>
        <input
          type="text"
          name="ruc"
          value={empresa.ruc}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Dirección</label>
        <input
          type="text"
          name="direccion"
          value={empresa.direccion}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Teléfono</label>
        <input
          type="text"
          name="telefono"
          value={empresa.telefono}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email de Contacto</label>
        <input
          type="email"
          name="email_contacto"
          value={empresa.email_contacto}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Sector</label>
        <input
          type="text"
          name="sector"
          value={empresa.sector}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Estado</label>
        <select
          name="estado"
          value={empresa.estado}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Guardar Empresa
      </button>
    </form>
  );
};

export default FormularioEmpresa