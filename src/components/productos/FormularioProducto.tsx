import React, { useState } from 'react';
import { crearProducto, actualizarProducto } from '../../servicios/servicioProductos';
import SelectorCategoria from './SelectorCategoria';

const FormularioProducto = ({ productoExistente, onGuardar }: any) => {
  const [producto, setProducto] = useState(
    productoExistente || { nombre: '', descripcion: '', precio_compra: 0, precio_venta: 0, categoria: null }
  );

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const manejarCategoriaSeleccionada = (categoria: any) => {
    setProducto({ ...producto, categoria });
  };

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (productoExistente) {
        await actualizarProducto(productoExistente.id_producto, producto);
      } else {
        await crearProducto(producto);
      }
      onGuardar();
    } catch (error) {
      console.error('Error al guardar producto:', error);
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <input
          type="text"
          name="descripcion"
          value={producto.descripcion}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Precio Compra</label>
        <input
          type="number"
          name="precio_compra"
          value={producto.precio_compra}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Precio Venta</label>
        <input
          type="number"
          name="precio_venta"
          value={producto.precio_venta}
          onChange={manejarCambio}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <SelectorCategoria onSeleccionar={manejarCategoriaSeleccionada} />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
      >
        Guardar
      </button>
    </form>
  );
};

export default FormularioProducto;
