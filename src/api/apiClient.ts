// src/api/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1/', // URL base de tu API
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Interceptores (opcional)
// apiClient.interceptors.request.use((config) => {
//   // Aquí puedes modificar la configuración antes de enviar la solicitud
//   // Por ejemplo, agregar un token de autenticación
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// apiClient.interceptors.response.use(
//   (response) => {
//     // Aquí puedes manejar respuestas exitosas
//     return response;
//   },
//   (error) => {
//     // Aquí puedes manejar errores globales
//     if (error.response.status === 401) {
//       // Redirigir al login si el token expira
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

export default apiClient;
