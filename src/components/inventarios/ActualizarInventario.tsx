import React, { useState } from 'react';
import { actualizarInventario } from '../../servicios/servicioInventarios';

const ActualizarInventario = ({ idInventario, onActualizar }: any) => {
  const [cantidad, setCantidad] = useState(0);
  const [tipoMovimiento, setTipoMovimiento] = useState('entrada');
  const [motivo, setMotivo] = useState('');

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await actualizarInventario(idInventario, { cantidad, tipoMovimiento, motivo });
      onActualizar();
    } catch (error) {
      console.error('Error al actualizar inventario:', error);
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Cantidad</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Tipo de Movimiento</label>
        <select
          value={tipoMovimiento}
          onChange={(e) => setTipoMovimiento(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="entrada">Entrada</option>
          <option value="salida">Salida</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Motivo</label>
        <input
          type="text"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Actualizar Inventario
      </button>
    </form>
  );
};

export default ActualizarInventario;