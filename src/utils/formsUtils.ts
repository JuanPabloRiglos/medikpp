import { LoginData, RegisterData } from '../types/Auth.ts';

// Funciones a utilizar en logica de formularios
const normalizedDataFn = (data: RegisterData | LoginData): RegisterData => {
  // quita espacios
  const valuesArray = Object.values(data);
  const normalizedValues = valuesArray.map((item) => item.trim());
  const keysArray = Object.keys(data);
  let normalizedData: RegisterData = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  };

  for (let i = 0; i < keysArray.length; i++) {
    normalizedData = {
      ...normalizedData,
      [keysArray[i]]: normalizedValues[i],
    };
  }

  return normalizedData;
};

export { normalizedDataFn };
