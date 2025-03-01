import api from './api';

export const iniciarSesion = async (credenciales: { email: string; password: string }) => {
  const respuesta = await api.post('/auth/login', credenciales);
  return respuesta.data;
};

export const registrarUsuario = async (datos: { nombre: string; email: string; password: string }) => {
  const respuesta = await api.post('/auth/register', datos);
  return respuesta.data;
};
