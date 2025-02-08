import { useEffect } from 'react';
import useAuthStore from '../store/authStore';

const useAuth = () => {
  const { user, login, logout } = useAuthStore();

  useEffect(() => {
    // Lógica para verificar la autenticación
  }, []);

  return { user, login, logout };
};

export default useAuth;
