import React, { useState } from 'react';

interface FiltroMovimientosProps {
  onFiltrar: (filtros: { fechaInicio: string; fechaFin: string; tipoMovimiento: string; producto: string }) => void;
}

const FiltroMovimientos: React.FC<FiltroMovimientosProps> = ({ onFiltrar }) => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [tipoMovimiento, setTipoMovimiento] = useState('');
  const [producto, setProducto] = useState('');

  const manejarFiltrar = () => {
    onFiltrar({ fechaInicio, fechaFin, tipoMovimiento, producto });
  };

  const manejarLimpiar = () => {
    setFechaInicio('');
    setFechaFin('');
    setTipoMovimiento('');
    setProducto('');
    onFiltrar({ fechaInicio: '', fechaFin: '', tipoMovimiento: '', producto: '' });
  };

  return (
    <div className="p-4 bg-white rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Filtrar Movimientos</h2>
      <div className="grid grid-cols-4 gap-4">
        {/* Filtro por Fecha Inicio */}
        <div>
          <label className="block text-sm font-medium mb-1">Fecha Inicio</label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Filtro por Fecha Fin */}
        <div>
          <label className="block text-sm font-medium mb-1">Fecha Fin</label>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Filtro por Tipo de Movimiento */}
        <div>
          <label className="block text-sm font-medium mb-1">Tipo de Movimiento</label>
          <select
            value={tipoMovimiento}
            onChange={(e) => setTipoMovimiento(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Todos</option>
            <option value="entrada">Entrada</option>
            <option value="salida">Salida</option>
            <option value="ajuste">Ajuste</option>
          </select>
        </div>

        {/* Filtro por Producto */}
        <div>
          <label className="block text-sm font-medium mb-1">Producto</label>
          <input
            type="text"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            placeholder="Nombre del producto"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="flex justify-end mt-4">
        <button
          onClick={manejarLimpiar}
          className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 mr-2"
        >
          Limpiar
        </button>
        <button
          onClick={manejarFiltrar}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default FiltroMovimientos;