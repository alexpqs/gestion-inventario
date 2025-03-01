import React, { useEffect, useState } from 'react';
import { obtenerEmpresaPorId } from '../../servicios/servicioEmpresas';

interface Empresa {
  id_empresa: number;
  nombre: string;
  ruc: string;
  direccion: string;
  telefono: string;
  email_contacto: string;
  sector: string;
  fecha_creacion: string;
  estado: string;
}

const DetalleEmpresa = ({ id }: { id: number }) => {
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarEmpresa = async () => {
      try {
        setCargando(true);
        const datos = await obtenerEmpresaPorId(id);
        setEmpresa(datos);
        setError(null);
      } catch (error) {
        console.error('Error al cargar empresa:', error);
        setError('No se pudo cargar la información de la empresa.');
      } finally {
        setCargando(false);
      }
    };

    cargarEmpresa();
  }, [id]);

  if (cargando) {
    return <p className="text-center text-gray-500">Cargando...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!empresa) {
    return <p className="text-center text-gray-500">No se encontró la empresa.</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Detalle de Empresa</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <p>
          <strong>ID:</strong> {empresa.id_empresa}
        </p>
        <p>
          <strong>Nombre:</strong> {empresa.nombre}
        </p>
        <p>
          <strong>RUC:</strong> {empresa.ruc}
        </p>
        <p>
          <strong>Dirección:</strong> {empresa.direccion}
        </p>
        <p>
          <strong>Teléfono:</strong> {empresa.telefono}
        </p>
        <p>
          <strong>Email de Contacto:</strong> {empresa.email_contacto}
        </p>
        <p>
          <strong>Sector:</strong> {empresa.sector}
        </p>
        <p>
          <strong>Fecha de Creación:</strong> {new Date(empresa.fecha_creacion).toLocaleDateString()}
        </p>
        <p>
          <strong>Estado:</strong> {empresa.estado}
        </p>
      </div>
    </div>
  );
};

export default DetalleEmpresa;