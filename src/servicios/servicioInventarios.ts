import api from './api';

export const obtenerInventarios = async () => {
  const respuesta = await api.get('/inventarios');
  return respuesta.data;
};

export const actualizarInventario = async (id: number, datos: any) => {
  const respuesta = await api.put(`/inventarios/${id}`, datos);
  return respuesta.data;
};

export const obtenerAlertasStock = async () => {
  const respuesta = await api.get('/alertas-stock');
  return respuesta.data;
};
