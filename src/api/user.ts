/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from './apiClient';
import { UserData } from '../types/user';

export const createUser = async (
  data: UserData
): Promise<UserData | { error: string }> => {
  try {
    console.log('En el servicio', data);
    const response = await apiClient.post('/user', data);
    console.log('Data devuelta por api en Create User:', response.data);
    return response.data as UserData;
  } catch (error: any) {
    console.log(error);
    return {
      error: `Error ${error.response.data.status}: ${error.response.data.error} - ${error.response.data.message}`,
    };
  }
};

export const searchByQuery = async (
  query: string
): Promise<UserData | { error: string }> => {
  try {
    let response;
    if (query.includes('@')) {
      console.log('En el servicio con @', query);
      response = await apiClient.get(`/user?email=${query}`);
    } else {
      response = await apiClient.get(`/user?lastName=${query}`);
    }

    // Verifica si la respuesta es válida
    if (response.data) {
      return response.data as UserData; // Retorna los datos del usuario
    } else {
      return { error: 'No se encontraron resultados' }; // Retorna un error si no hay datos
    }
  } catch (error: any) {
    // Maneja errores de la solicitud
    console.error('Error en searchByQuery:', error);
    return {
      error: error.response?.data?.message || 'Error al buscar usuario',
    };
  }
};
