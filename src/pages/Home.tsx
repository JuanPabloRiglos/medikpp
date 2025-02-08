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
    <div className="p-4">
      <h1 className="text-2xl font-bold text-cyan-600">
        Bienvenido a la aplicación
      </h1>
      <p>Por favor, inicia sesión o regístrate para continuar.</p>
    </div>
  );
};

export default Home;
