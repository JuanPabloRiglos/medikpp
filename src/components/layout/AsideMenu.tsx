// src/components/layout/AsideMenu.tsx
import { NavLink } from 'react-router-dom';

type AsideMenuProps = {
  asideToggle: boolean;
};

const AsideMenu = ({ asideToggle }: AsideMenuProps) => {
  return (
    <aside
      className={`bg-gray-800 w-64 transition-transform ${
        asideToggle ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`
              }
            >
              Perfil
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideMenu;
