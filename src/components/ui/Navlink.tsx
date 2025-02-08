import { JSX } from 'react';
import { NavLink } from 'react-router-dom';

type NavlinkComponentProps = {
  route: string; // Asegúrate de tipificar `route` como string
  children?: React.ReactNode; // Para permitir contenido personalizado dentro del enlace
};

export function NavlinkComponent({
  route,
  children,
}: NavlinkComponentProps): JSX.Element {
  return (
    <NavLink
      to={`/${route}`}
      className={({ isActive }) =>
        `block p-2 rounded ${
          isActive
            ? 'bg-blue-500 text-white'
            : 'text-gray-300 hover:bg-gray-700'
        }`
      }
    >
      {children || !route ? 'Inicio' : `${route}`}{' '}
      {/* Usa children si está definido, de lo contrario, muestra "Enlace" */}
    </NavLink>
  );
}
