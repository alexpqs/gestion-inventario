import React, { useState } from 'react';
import { generarReporte } from '../../servicios/servicioReportes';

const FormularioReporte = ({ onGenerar }: any) => {
  const [tipo, setTipo] = useState('inventario');
  const [empresa, setEmpresa] = useState('');
  const [usuario, setUsuario] = useState('');

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await generarReporte({ tipo, empresa, usuario });
      onGenerar();
    } catch (error) {
      console.error('Error al generar reporte:', error);
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Tipo de Reporte</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="inventario">Inventario</option>
          <option value="ventas">Ventas</option>
          <option value="perdidas">Pérdidas</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Empresa</label>
        <input
          type="text"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Usuario</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Generar Reporte
      </button>
    </form>
  );
};

export default FormularioReporte;