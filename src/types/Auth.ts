import { UserData } from './user';

// types.ts
export interface RegisterData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

// types.ts
export interface LoginData {
  email: string;
  password: string;
}
export interface LoginResponse {
  userLogged: UserData;
  token: string;
}
