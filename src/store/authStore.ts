import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
};

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      token: null,
      setToken: (newToken: string) => set({ token: newToken }),
      logout: () => set({ token: null }),
    }),
    {
      name: 'auth-storage', // Nombre de la clave en localStorage
    }
  )
);

export default useAuthStore;
