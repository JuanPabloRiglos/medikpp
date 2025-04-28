/* eslint-disable @typescript-eslint/no-explicit-any */
//import useAuthStore from '../store/authStore';
import { useState } from 'react';
import { createUser, searchByQuery } from '../api';

//types
import { UserData } from '../types/user.ts';

export function useManagementUser() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<UserData | null>(null);

  //Fn para crear un usuario
  const addUserFn = async (
    data: UserData
  ): Promise<{ responseData: UserData | null; error: string | null }> => {
    console.log('EN HOOK', data);
    //Si viene vacio
    if (!data) {
      setError('Faltan datos para crear usuario');
      return { responseData: null, error: 'Faltan datos para crear usuario' };
    }

    try {
      const response = await createUser(data);
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

  // Función para buscar un usuario
  const searchUserFn = async (
    query: string
  ): Promise<{ searchResult: UserData | null; error: string | null }> => {
    if (!query) {
      setError('Debe ingresar un apellido o correo para buscar');
      return {
        searchResult: null,
        error: 'Debe ingresar un apellido o correo para buscar',
      };
    }

    try {
      const response = await searchByQuery(query); // Llama a la función de búsqueda en la API
      if ('error' in response) {
        setError(response.error);
        return { searchResult: null, error: response.error };
      }
      const result: UserData = response;
      setSearchResult(result);
      setError(null);
      return { searchResult: result, error: null };
    } catch (err: any) {
      setError(err.message);
      setSearchResult(null);
      return { searchResult: null, error: err.message };
    }
  };

  return { addUserFn, searchUserFn, userData, searchResult, error };
}
