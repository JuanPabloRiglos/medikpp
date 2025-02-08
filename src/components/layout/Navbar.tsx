type NavbarProps = {
  toggleAside: () => void;
  asideToggle: boolean;
};

const Navbar = ({ toggleAside, asideToggle }: NavbarProps) => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <button onClick={toggleAside}>
        {asideToggle ? 'Ocultar Menú' : 'Mostrar Menú'}
      </button>
    </nav>
  );
};

export default Navbar;
