import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserData } from '../types/user';

type UserState = {
  userLogged: UserData | null;
  setUser: (user: UserData) => void;
  clearUser: () => void;
};

const useUserStore = create(
  persist<UserState>(
    (set) => ({
      userLogged: null,
      setUser: (newUser: UserData) => {
        console.log('Setee al user con este valor', newUser);
        set({ userLogged: newUser });
      },
      clearUser: () => set({ userLogged: null }),
    }),
    {
      name: 'user-storage', // Nombre de la clave en localStorage
    }
  )
);

export default useUserStore;
