import React from 'react';

const DescargarReporte = ({ url }: { url: string }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
    >
      Descargar Reporte
    </a>
  );
};

export default DescargarReporte;
