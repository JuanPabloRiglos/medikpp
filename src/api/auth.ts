/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from './apiClient';
import { LoginData, LoginResponse, RegisterData } from '../types/Auth';
import { UserData } from '../types/user';

export const register = async (
  data: RegisterData
): Promise<UserData | { error: string }> => {
  try {
    const response = await apiClient.post('/auth/register', data);
    console.log('Data devuelta por api en REGISTER:', response.data);
    return response.data as UserData;
  } catch (error: any) {
    return {
      error: `Error ${error.response.data.status}: ${error.response.data.error} - ${error.response.data.message}`,
    };
  }
};

export const login = async (
  data: LoginData
): Promise<LoginResponse | { error: string }> => {
  try {
    const response = await apiClient.post('/auth/login', data);
    console.log('Data devuelta por api en LOGIN:', response.data);
    return response.data as LoginResponse;
  } catch (error: any) {
    return {
      error: `Error ${error.response.data.status}: ${error.response.data.error} - ${error.response.data.message}`,
    };
  }
};
