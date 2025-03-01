import api from './api';

export const obtenerReportes = async () => {
  const respuesta = await api.get('/reportes');
  return respuesta.data;
};

export const generarReporte = async (datos: any) => {
  const respuesta = await api.post('/reportes', datos);
  return respuesta.data;
};
