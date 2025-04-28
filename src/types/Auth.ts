import { UserData } from './user';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  userLogged: UserData;
  token: string;
}
