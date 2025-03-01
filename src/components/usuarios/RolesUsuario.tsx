import React, { useEffect, useState } from 'react';
import { obtenerRoles, asignarRoles } from '../../servicios/servicioUsuarios';

const RolesUsuario = ({ idUsuario }: any) => {
  const [roles, setRoles] = useState([]);
  const [rolesSeleccionados, setRolesSeleccionados] = useState([]);

  useEffect(() => {
    const cargarRoles = async () => {
      try {
        const datos = await obtenerRoles();
        setRoles(datos);
      } catch (error) {
        console.error('Error al cargar roles:', error);
      }
    };

    cargarRoles();
  }, []);

  const manejarCambio = (idRol: number) => {
    setRolesSeleccionados((prev) =>
      prev.includes(idRol) ? prev.filter((id) => id !== idRol) : [...prev, idRol]
    );
  };

  const manejarGuardar = async () => {
    try {
      await asignarRoles(idUsuario, rolesSeleccionados);
      alert('Roles asignados correctamente.');
    } catch (error) {
      console.error('Error al asignar roles:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Asignar Roles</h2>
      <ul>
        {roles.map((rol) => (
          <li key={rol.id_rol}>
            <label>
              <input
                type="checkbox"
                checked={rolesSeleccionados.includes(rol.id_rol)}
                onChange={() => manejarCambio(rol.id_rol)}
              />
              {rol.nombre}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={manejarGuardar}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
      >
        Guardar Roles
      </button>
    </div>
  );
};

export default RolesUsuario;