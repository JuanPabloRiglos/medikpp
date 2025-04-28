import { OpenedMenu } from '../../assets/icons/layoutIcons/OpenedMenu.tsx';
import { ClosedMenu } from '../../assets/icons/layoutIcons/ClosedMenu.tsx';

type NavbarProps = {
  toggleAside: () => void;
  asideToggle: boolean;
};

const Navbar = ({ toggleAside, asideToggle }: NavbarProps) => {
  return (
    <nav className="bg-blue-500 flex justify-end py-4 pr-4 items-center text-white ">
      <button onClick={toggleAside}>
        {asideToggle ? (
          <OpenedMenu styles="size-9 hover:cursor-pointer hover:scale-110 transition-all duration-150" />
        ) : (
          <ClosedMenu styles="size-9 hover:cursor-pointer hover:scale-110 transition-all duration-150" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
