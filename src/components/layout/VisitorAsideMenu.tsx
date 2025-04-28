import { NavlinkComponent } from '../ui/Navlink';

type AsideMenuProps = {
  asideToggle: boolean;
};

export function VisitorAsideMenu({ asideToggle }: AsideMenuProps) {
  return (
    <aside
      className={`flex flex-col justify-stretch h-full lg:hidden  ${
        asideToggle
          ? 'absolute z-10 w-screen mt-24 bg-gradient-to-b from-primary to-accent animate-slideInLeft '
          : ' hidden'
      }`}
    >
      <nav className="w-3/4 h-[30%]  mx-auto flex flex-col items-center justify-around bg-light/60 rounded-lg px-6 py-6 shadow-md">
        <NavlinkComponent route="visitor/login">
          <span className="px-4 text-center">Inicia Sesion</span>
        </NavlinkComponent>

        <NavlinkComponent route="visitor/register">
          <span className="px-4 text-center"> Registrate </span>
        </NavlinkComponent>

        <NavlinkComponent route="visitor">
          <span className="px-4 text-center"> Volver a Inicio </span>
        </NavlinkComponent>
      </nav>
    </aside>
  );
}
