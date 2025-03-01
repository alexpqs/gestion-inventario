import React, { useEffect, useState } from 'react';
import { obtenerCategorias } from '../../servicios/servicioProductos';

const SelectorCategoria = ({ onSeleccionar }: any) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const cargarCategorias = async () => {
      try {
        const datos = await obtenerCategorias();
        setCategorias(datos);
      } catch (error) {
        console.error('Error al cargar categorías:', error);
      }
    };

    cargarCategorias();
  }, []);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Categoría</label>
      <select
        onChange={(e) => onSeleccionar(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        <option value="">Seleccionar Categoría</option>
        {categorias.map((categoria) => (
          <option key={categoria.id_categoria} value={categoria.id_categoria}>
            {categoria.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorCategoria;
