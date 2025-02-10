import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserData } from '../types/user';

type UserState = {
  user: UserData | null;
  setUser: (user: UserData) => void;
  clearUser: () => void;
};

const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (newUser: UserData) => {
        console.log('Setee al user con este valor', newUser);
        set({ user: newUser });
      },
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', // Nombre de la clave en localStorage
    }
  )
);

export default useUserStore;
