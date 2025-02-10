// src/components/layout/AsideMenu.tsx
import useUserStore from '../../store/userStore';
import useAuthStore from '../../store/authStore';
import { NavlinkComponent } from '../ui/Navlink';
import { useNavigate } from 'react-router-dom';

type AsideMenuProps = {
  asideToggle: boolean;
};

const AsideMenu = ({ asideToggle }: AsideMenuProps) => {
  const { user, clearUser } = useUserStore();
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser(); // Limpia los datos del usuario
    logout(); // Limpia el token de autenticación
    navigate('/'); // Redirige al usuario a la página de inicio
  };
  return (
    <aside
      className={`bg-gray-800 w-7/12 h-full flex flex-col justify-between absolute transition-transform duration-300
        sm:w-4/12 ${asideToggle ? ' left-0' : '-left-[100%]'}`}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavlinkComponent route="" />
          </li>
          <li>
            <NavlinkComponent route="dashboard" />
          </li>
          <li>
            <NavlinkComponent route="profile" />
          </li>
        </ul>
      </nav>
      <article className=" align-bottom  flex flex-col justify-center items-center">
        <span className="text-base font-semibold italic text-blue-500">{`${user?.name} Logeado`}</span>
        <button
          className="text-red-800 font-semibold hover:text-red-500 hover:scale-105 transition-all duration-150"
          onClick={handleLogout}
        >
          Cerrar
        </button>
      </article>
    </aside>
  );
};

export default AsideMenu;
