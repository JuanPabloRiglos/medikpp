import { create } from 'zustand';

type AuthState = {
  user: null | { id: string; email: string };
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (email, password) => {
    // Lógica de login
  },
  logout: () => set({ user: null }),
}));

export default useAuthStore;
