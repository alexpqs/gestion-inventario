import api from './api'; // Importamos la configuración de Axios

// Interfaz para definir los datos de un movimiento
interface MovimientoInventario {
  id_movimiento?: number;
  producto: string; // ID o nombre del producto
  cantidad: number;
  tipo_movimiento: string; // 'entrada', 'salida', 'ajuste'
  motivo: string;
  fecha_movimiento?: string; // Fecha opcional (se puede generar automáticamente en el backend)
  usuario?: string; // ID o nombre del usuario que realiza el movimiento
  costo_unitario?: number;
  ubicacion?: string;
}

// Obtener todos los movimientos de inventario
export const obtenerMovimientos = async (): Promise<MovimientoInventario[]> => {
  try {
    const respuesta = await api.get('/movimientos-inventario');
    return respuesta.data;
  } catch (error) {
    console.error('Error al obtener movimientos de inventario:', error);
    throw error;
  }
};

// Obtener un movimiento específico por su ID
export const obtenerMovimientoPorId = async (id: number): Promise<MovimientoInventario> => {
  try {
    const respuesta = await api.get(`/movimientos-inventario/${id}`);
    return respuesta.data;
  } catch (error) {
    console.error(`Error al obtener el movimiento con ID ${id}:`, error);
    throw error;
  }
};

// Registrar un nuevo movimiento de inventario
export const registrarMovimiento = async (movimiento: MovimientoInventario): Promise<MovimientoInventario> => {
  try {
    const respuesta = await api.post('/movimientos-inventario', movimiento);
    return respuesta.data;
  } catch (error) {
    console.error('Error al registrar un nuevo movimiento:', error);
    throw error;
  }
};

// Actualizar un movimiento existente
export const actualizarMovimiento = async (
  id: number,
  movimiento: Partial<MovimientoInventario>
): Promise<MovimientoInventario> => {
  try {
    const respuesta = await api.put(`/movimientos-inventario/${id}`, movimiento);
    return respuesta.data;
  } catch (error) {
    console.error(`Error al actualizar el movimiento con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un movimiento por su ID
export const eliminarMovimiento = async (id: number): Promise<void> => {
  try {
    await api.delete(`/movimientos-inventario/${id}`);
  } catch (error) {
    console.error(`Error al eliminar el movimiento con ID ${id}:`, error);
    throw error;
  }
};

// Filtrar movimientos por criterios específicos
export const filtrarMovimientos = async (filtros: {
  fechaInicio?: string;
  fechaFin?: string;
  tipoMovimiento?: string;
  producto?: string;
}): Promise<MovimientoInventario[]> => {
  try {
    const respuesta = await api.get('/movimientos-inventario', { params: filtros });
    return respuesta.data;
  } catch (error) {
    console.error('Error al filtrar movimientos de inventario:', error);
    throw error;
  }
};
