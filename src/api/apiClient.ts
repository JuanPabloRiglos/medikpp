// src/api/apiClient.ts
import axios from 'axios';
import useAuthStore from '../store/authStore';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1/', // URL base de tu API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token a las solicitudes
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token; // Obtén el token del store
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Agrega el token a la cabecera
  }
  return config;
});

// Interceptor para manejar errores globales
apiClient.interceptors.response.use(
  (response) => {
    // Maneja respuestas exitosas
    return response;
  },
  (error) => {
    // Maneja errores globales
    if (error.response?.status === 401) {
      // Si el token expira o no es válido, redirige al login
      useAuthStore.getState().logout(); // Limpia el token del store
      window.location.href = '/login'; // Redirige al login
    }
    return Promise.reject(error);
  }
);

export default apiClient;
