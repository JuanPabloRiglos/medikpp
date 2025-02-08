// src/components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import AsideMenu from './AsideMenu';
import { useState } from 'react';

const Layout = () => {
  const [asideToggle, setAsideToggle] = useState(false);

  const toggleAside = () => {
    setAsideToggle((prev) => !prev);
  };

  return (
    <main className="w-screen h-screen text-slate-700 flex flex-col">
      <Navbar toggleAside={toggleAside} asideToggle={asideToggle} />
      <section className="relative w-full h-full flex justify-center gap-2">
        <AsideMenu asideToggle={asideToggle} />
        <main className="w-full h-full flex-1 bg-background">
          <Outlet />
        </main>
      </section>
    </main>
  );
};

export default Layout;
