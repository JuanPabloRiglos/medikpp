// Definir el enum para los roles
export enum UserRole {
  Patient = 'Patient',
  Admin = 'Admin',
  Doctor = 'Doctor',
  Secretary = 'Secretary',
}

// Definir la interfaz para los datos de usuario
export interface UserData {
  role: UserRole;
  createdAt: Date;
  id: string;
  name: string;
  lastName: string;
  phone: string;
  healthInsurance?: string | null; // Especificar que puede ser un string o null
  email: string;
}
