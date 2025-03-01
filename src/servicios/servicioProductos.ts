import api from './api';

export const obtenerProductos = async () => {
  const respuesta = await api.get('/productos');
  return respuesta.data;
};

export const obtenerProductoPorId = async (id: number) => {
  const respuesta = await api.get(`/productos/${id}`);
  return respuesta.data;
};

export const crearProducto = async (producto: any) => {
  const respuesta = await api.post('/productos', producto);
  return respuesta.data;
};

export const actualizarProducto = async (id: number, producto: any) => {
  const respuesta = await api.put(`/productos/${id}`, producto);
  return respuesta.data;
};

export const eliminarProducto = async (id: number) => {
  await api.delete(`/productos/${id}`); // Cadena cerrada correctamente
};
