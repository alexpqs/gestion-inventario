import api from './api';

export const obtenerUsuarios = async () => {
  const respuesta = await api.get('/usuarios');
  return respuesta.data;
};

export const obtenerUsuarioPorId = async (id: number) => {
  const respuesta = await api.get(`/usuarios/${id}`);
  return respuesta.data;
};

export const crearUsuario = async (usuario: any) => {
  const respuesta = await api.post('/usuarios', usuario);
  return respuesta.data;
};

export const actualizarUsuario = async (id: number, usuario: any) => {
  const respuesta = await api.put(`/usuarios/${id}`, usuario);
  return respuesta.data;
};

export const eliminarUsuario = async (id: number) => {
  await api.delete(`/usuarios/${id}`);
};

export const obtenerRoles = async () => {
  const respuesta = await api.get('/roles');
  return respuesta.data};
