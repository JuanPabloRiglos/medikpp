import { useNavigate } from 'react-router-dom';

export function H1Component() {
  const navigate = useNavigate();

  const gomeHome = () => {
    navigate('/');
  };

  return (
    <h1
      className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight w-full text-center 
                lg:w-6/12 lg:text-start hover:cursor-pointer"
      onClick={gomeHome}
    >
      Cuid<span className="text-light">ARTE</span>
    </h1>
  );
}
