// src/components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';

import { useState } from 'react';
import { VisitorAsideMenu } from './VisitorAsideMenu';
import { VisitorHeader } from './VisitorHeader';

const VisitorLayout = () => {
  const [asideToggle, setAsideToggle] = useState(false);

  const toggleAside = () => {
    setAsideToggle((prev) => !prev);
  };

  return (
    <main className="w-full h-full flex flex-col justify-start items-center">
      {/* Aqui Header */}
      <VisitorHeader toggleAside={toggleAside} asideToggle={asideToggle} />
      {/*  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-  ASIDE  =-=-=-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-*/}
      {/* Solo en pantallas pequeñas */}
      <VisitorAsideMenu asideToggle={asideToggle} />
      <section
        className="w-full min-h-[500px] h-[80%] bg-gradient-to-b from-primary to-accent pt-8 pb-12 flex flex-col items-center
        md:flex-row md:items-center
        xl:px-24"
      >
        <Outlet />
      </section>
    </main>
  );
};

export default VisitorLayout;
