import { useEffect } from 'react';
import useUserStore from '../store/userStore'; // Hook para manejar la autenticación
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useUserStore(); // Obtén el usuario autenticado
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario está autenticado, redirigir al dashboard
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <main className="p-4 w-full h-full md:flex md:flex-col md:gap-16">
      <h1 className="text-2xl font-bold text-cyan-600 md:w-full md:text-center">
        Bienvenido a Medikpp
      </h1>
      <div
        className=" w-full h-full flex flex-col justify-center items-center
      md:flex-row-reverse md:h-[80%] 
      lg:max-w-[75%] lg:mx-auto"
      >
        <section
          className="h-64 my-12 flex flex-col items-center gap-8 
        md:w-8/12 md:h-full md:justify-center"
        >
          <p className="md:text-center font-bold">
            Por favor, inicia sesión o regístrate para continuar.
          </p>
          <div className=" w-full text-center">
            <h3 className="text-cyan-600 text-xl font-bold italic hover:scale-105 transition-all duration-200">
              <Link to={'login'}>Ingresa a tu cuenta!</Link>
            </h3>
          </div>
          <div className=" w-full text-center">
            <h3 className="text-cyan-600 text-xl font-bold italic hover:scale-105 transition-all duration-200">
              <Link to={'register'}>Registrate</Link>
            </h3>
          </div>
        </section>
        <article className="w-full h-full flex justify-center">
          <img
            src="/DoctorHomeImg.png"
            alt="imagen de animacion de un doctor"
          />
        </article>
      </div>
    </main>
  );
};

export default Home;
