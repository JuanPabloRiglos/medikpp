export enum UserRole {
  Patient = 'Patient',
  Admin = 'Admin',
  Doctor = 'Doctor',
  Secretary = 'Secretary',
}

// Interfaz base para los datos de usuario
export interface UserData {
  role?: UserRole;
  createdAt?: Date;
  id?: string;
  name: string;
  lastName: string;
  email?: string;
  phone?: string;
  healthInsurance?: string | null;
  password?: string;
}

// Extiende UserData para incluir email y password (necesarios para registro)
export interface RegisterData extends UserData {
  email: string;
  password: string;
}

export interface EditUserData extends UserData {
  auth: {
    email: string;
  };
}
