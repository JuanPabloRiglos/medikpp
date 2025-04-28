/**
 * NavlinkComponent es un wrapper de `NavLink` de React Router que aplica estilos de Tailwind personalizados.
 *
 * - Si `isActive`, muestra un estilo especial para destacar el enlace activo.
 * - Si `contrast` es true, aplica un estilo alternativo con mayor contraste.
 * - Si `transparent` es true, hace el fondo del botón transparente.
 * - Si no se pasa `children`, se usa el nombre de la ruta como texto del enlace (o "Inicio" si `route` está vacío).
 */

import { JSX } from 'react';
import { NavLink } from 'react-router-dom';

type NavlinkComponentProps = {
  route: string; // Asegúrate de tipificar `route` como string
  children?: React.ReactNode; // Para permitir contenido personalizado dentro del enlace
  contrast?: boolean;
  transparent?: boolean;
};

export function NavlinkComponent({
  route /** Ruta a la que apunta el enlace, sin la barra inicial. Ej: 'inicio', 'contacto' */,
  children /** Contenido personalizado que se mostrará dentro del enlace */,
  contrast,
  transparent,
}: NavlinkComponentProps): JSX.Element {
  console.log(contrast);

  return (
    <NavLink
      to={`/${route}`}
      className={({ isActive }) =>
        ` p-2  text-lg  px-4 py-2 flex justify-center items-center rounded-lg w-[95%] font-semibold text-light text-nowrap ${
          isActive
            ? 'bg-muted text-dark border-2 border-contrast'
            : `bg-accent hover:bg-primary transition-colors duration-150 `
        }
        ${contrast ? 'bg-contrast hover:bg-primary' : ''} 
        ${transparent ? 'bg-transparent hover:bg-secondary' : ''}`
      }
    >
      {children ? children : !route ? 'Inicio' : `${route}`}
      {/* Usa children si está definido, de lo contrario, muestra "Enlace" */}
    </NavLink>
  );
}
