// src/components/layout/AsideMenu.tsx

import { NavlinkComponent } from '../ui/Navlink';

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
    </aside>
  );
};

export default AsideMenu;
