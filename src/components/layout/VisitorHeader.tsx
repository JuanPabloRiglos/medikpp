import { OpenedMenu } from '../../assets/icons/layoutIcons/OpenedMenu.tsx';
import { ClosedMenu } from '../../assets/icons/layoutIcons/ClosedMenu.tsx';
import { H1Component } from '../ui/h1Component.tsx';
import { NavlinkComponent } from '../ui/Navlink.tsx';

type NavbarProps = {
  toggleAside: () => void;
  asideToggle: boolean;
};

export function VisitorHeader({ toggleAside, asideToggle }: NavbarProps) {
  return (
    <header className="w-full h-24 bg-gradient-to-b from-accent to-primary flex justify-around items-center px-6 shadow-md ">
      {/* //solo en pantallas pequeñas  */}
      <button
        onClick={() => toggleAside()}
        className=" w-16 h-16 flex justify-center items-center text-light rounded-full hover:scale-110 
                  lg:hidden"
      >
        {asideToggle ? (
          <OpenedMenu styles="size-10 transition-all duration-150" />
        ) : (
          <ClosedMenu styles="size-10 transition-all duration-150" />
        )}
      </button>
      <H1Component />
      {/* Solo en pantallas grandes */}
      <nav className="hidden w-5/12 h-[30%]  mx-auto lg:flex items-center justify-between border-2 rounded-lg min-h-fit hover:bg-secondary">
        <NavlinkComponent route="visitor/login" transparent={true}>
          <span className="px-4 text-center">Inicia Sesion</span>
        </NavlinkComponent>

        <NavlinkComponent route="visitor/register" contrast={true}>
          <span className="px-4 text-center"> Registrate </span>
        </NavlinkComponent>
      </nav>
    </header>
  );
}
