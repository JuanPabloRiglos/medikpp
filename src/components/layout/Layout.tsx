// src/components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//componentes Logicos
import useUserStore from '../../store/userStore';

//componentes propios
import Navbar from './Navbar';
import AsideMenu from './AsideMenu';

const Layout = () => {
  const { userLogged } = useUserStore();
  const navigate = useNavigate();
  const [asideToggle, setAsideToggle] = useState(false);

  useEffect(() => {
    if (!userLogged) {
      navigate('/visitor');
    }
  }, [userLogged]);

  const toggleAside = () => {
    setAsideToggle((prev) => !prev);
  };

  return (
    <main className="w-screen h-screen relative text-slate-700 flex flex-col ">
      <Navbar toggleAside={toggleAside} asideToggle={asideToggle} />
      <section className="relative w-full h-full flex justify-center gap-2">
        <AsideMenu asideToggle={asideToggle} />
        <main className="w-full h-full flex-1 bg-background overflow-y-scroll">
          <Outlet />
        </main>
      </section>
    </main>
  );
};

export default Layout;
