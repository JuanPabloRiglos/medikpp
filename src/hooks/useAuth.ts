/* eslint-disable @typescript-eslint/no-explicit-any */
//import useAuthStore from '../store/authStore';
import { useState } from 'react';
import { register, login } from '../api';
import { normalizedDataFn } from '../utils/formsUtils.ts';

//types
import { LoginData, LoginResponse, RegisterData } from '../types/Auth.ts';
import { UserData } from '../types/user.ts';

export function useAuth() {
  const [userData, setUserData] = useState<UserData | LoginResponse | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const registerFnHook = async (
    data: RegisterData
  ): Promise<{ responseData: UserData | null; error: string | null }> => {
    //Si viene vacio
    if (!data) {
      setError('Faltan datos para registrar');
      return { responseData: null, error: 'Faltan datos para registrar' };
    }

    try {
      const normalizedData = normalizedDataFn(data);

      const response = await register(normalizedData);
      if ('error' in response) {
        const errorMessage = response.error.includes('email')
          ? 'El email ya está en uso. Por favor, utiliza otro.'
          : response.error;
        setError(errorMessage);
        return { responseData: null, error: errorMessage };
      }
      const responseData: UserData = response;
      setUserData(responseData);
      setError(null); // Limpiamos cualquier error previo
      return { responseData, error: null }; // Devolvemos los datos en caso de éxito
    } catch (err: any) {
      setError(err.message); // Establecemos el error en el estado
      setUserData(null);
      return { responseData: null, error: err.message }; // Devolvemos el error en caso de error
    }
  };

  const loginFnHook = async (
    data: LoginData
  ): Promise<{ responseData: LoginResponse | null; error: string | null }> => {
    if (!data) {
      setError('Faltan datos para logear al usuario');
      return { responseData: null, error: 'Faltan datos para login' };
    }

    //cuerpo de la fn
    try {
      const normalizedData = normalizedDataFn(data);

      const response = await login({
        email: normalizedData.email,
        password: normalizedData.password,
      });

      // Verifica si la respuesta contiene un error
      if ('error' in response) {
        const errorMessage = response.error.includes('credenciales')
          ? 'Credenciales incorrectas. Por favor, verifica tu email y contraseña.'
          : response.error;
        setError(errorMessage);
        return { responseData: null, error: errorMessage };
      }

      const responseData: LoginResponse = response;
      setUserData(responseData);
      setError(null); // Limpiamos cualquier error previo
      return { responseData, error: null }; // Devolvemos los datos en caso de éxito
    } catch (err: any) {
      setError(err.message); // Establecemos el error en el estado
      setUserData(null);
      return { responseData: null, error: err.message }; // Devolvemos el error en caso de error
    }
  };

  return { registerFnHook, loginFnHook, userData, error };
}
