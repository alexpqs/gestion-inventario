import api from './api'; // Importamos la configuración de Axios

// Obtener todas las empresas
export const obtenerEmpresas = async () => {
  try {
    const respuesta = await api.get('/empresas');
    return respuesta.data;
  } catch (error) {
    console.error('Error al obtener empresas:', error);
    throw error;
  }
};

// Obtener una empresa por su ID
export const obtenerEmpresaPorId = async (id: number) => {
  try {
    const respuesta = await api.get(`/empresas/${id}`);
    return respuesta.data;
  } catch (error) {
    console.error(`Error al obtener la empresa con ID ${id}:`, error);
    throw error;
  }
};

// Crear una nueva empresa
export const crearEmpresa = async (empresa: any) => {
  try {
    const respuesta = await api.post('/empresas', empresa);
    return respuesta.data;
  } catch (error) {
    console.error('Error al crear empresa:', error);
    throw error;
  }
};

// Actualizar una empresa existente
export const actualizarEmpresa = async (id: number, empresa: any) => {
  try {
    const respuesta = await api.put(`/empresas/${id}`, empresa);
    return respuesta.data;
  } catch (error) {
    console.error(`Error al actualizar la empresa con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una empresa
export const eliminarEmpresa = async (id: number) => {
  try {
    await api.delete(`/empresas/${id}`);
  } catch (error) {
    console.error(`Error al eliminar la empresa con ID ${id}:`, error);
    throw error;
  }
};
