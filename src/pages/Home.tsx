// import { useEffect } from 'react';
// import useAuth from '../hooks/useAuth.ts'; // Hook para manejar la autenticación
// import { useNavigate } from 'react-router-dom';

const Home = () => {
  //   const { user } = useAuth(); // Obtén el usuario autenticado
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     // Si el usuario está autenticado, redirigir al dashboard
  //     if (user) {
  //       navigate('/dashboard');
  //     }
  //   }, [user, navigate]);

  return (
    <main className="p-4 w-full h-full">
      <h1 className="text-2xl font-bold text-cyan-600">Bienvenido a Medikpp</h1>
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <section>
          <p>Por favor, inicia sesión o regístrate para continuar.</p>
        </section>
        <article>
          <img src="" alt="" />
        </article>
      </div>
    </main>
  );
};

export default Home;
