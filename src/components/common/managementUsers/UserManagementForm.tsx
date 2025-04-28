import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
//Store

//hooks

//types
import { UserData, UserRole, EditUserData } from '../../../types/user.ts';
import { useEffect } from 'react';

//componentes
//iconos

//typado
interface FormProps {
  styles?: string;
  userToEdit?: EditUserData;
  userLogged: UserData;
  addUserFn: (
    data: UserData | EditUserData
  ) => Promise<{ responseData: UserData | null; error: string | null }>;
}

export default function UserManagamentFomr({
  styles,
  userToEdit,
  userLogged,
  addUserFn,
}: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors },
  } = useForm<UserData | EditUserData>({
    defaultValues: {
      name: userToEdit?.name || '',
      lastName: userToEdit?.lastName || '',
      email: userToEdit?.email || '',
      role: userToEdit?.role || UserRole.Patient,
    },
  });

  // Reinicia el formulario cuando userToEdit cambie
  useEffect(() => {
    reset({
      name: userToEdit?.name || '',
      lastName: userToEdit?.lastName || '',
      email: userToEdit?.auth.email || '',
      role: userToEdit?.role || UserRole.Patient,
    });
  }, [userToEdit, reset]);

  //fn para registrar
  const registerSubmit: SubmitHandler<UserData> = async (data) => {
    const { responseData } = await addUserFn(data);
    if (responseData) {
      Swal.fire('¡Registro exitoso!', 'success');
    } else {
      Swal.fire('Error en el registro');
    }
  };

  return (
    <section className={`${styles}`}>
      <form
        onSubmit={handleSubmit(registerSubmit)}
        role="form"
        className="w-11/12 flex flex-col items-center gap-4 mx-auto"
      >
        {/* NOMBRE ===================================================*/}
        <div
          className="w-full flex flex-col items-start gap-1"
          aria-labelledby="name"
        >
          <div className="w-full border-2 flex flex-nowrap border-cyan-700 justify-between z-0 rounded-[5px]  py-4 px-4 bg-boxBackground border-button text-effects">
            <input
              className={``}
              type="text"
              id="name"
              placeholder="Ingresa el nombre"
              {...register('name', {
                required: {
                  value: true,
                  message: 'El campo Nombre es requerido',
                },
                maxLength: {
                  value: 50,
                  message: 'El campo admite un máximo de 50 caracteres',
                },
                pattern: {
                  value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ~? ]+$/,
                  message:
                    'El campo no admite numeros ni caracteres especiales',
                },
              })}
            />
          </div>
        </div>
        {errors.name && (
          <span className="text-red-500 text-start w-full pl-1">
            {errors.name.message}
          </span>
        )}
        {/* APELLIDO ===================================================*/}
        <div
          className="w-full flex flex-col items-start gap-1"
          aria-labelledby="lastName"
        >
          <div className="w-full border-2 flex flex-nowrap border-cyan-700 justify-between z-0 rounded-[5px] py-4 px-4 bg-boxBackground border-button text-effects">
            <input
              className={``}
              type="text"
              id="lastName"
              placeholder="Ingresa el Apellido"
              {...register('lastName', {
                required: {
                  value: true,
                  message: 'El campo Apellido es requerido',
                },
                maxLength: {
                  value: 50,
                  message: 'El campo admite un máximo de 50 caracteres',
                },
                pattern: {
                  value: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ~? ]+$/,
                  message:
                    'El campo no admite numeros ni caracteres especiales',
                },
              })}
            />
          </div>
        </div>
        {errors.lastName && (
          <span className="text-red-500 text-start w-full pl-1">
            {errors.lastName.message}
          </span>
        )}

        {/* EMAIL ===================================================*/}
        <div
          className="w-full flex flex-col items-start gap-1"
          aria-labelledby="email"
        >
          <div className="w-full border-2 flex flex-nowrap border-cyan-700 justify-between z-0 rounded-[5px]  py-4 px-4 bg-boxBackground border-button text-effects">
            <input
              className={``}
              type="email"
              id="email"
              placeholder="Ingresa el correo electronico"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Debe indicar el email',
                },
                minLength: {
                  value: 5,
                  message:
                    'El email ingresado debe contener al menos 5 caracteres',
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:
                    'Debe ingresar un email válido. Ten en cuenta que el campo solo acepta caracteres alfabéticos, numéricos o especiales.',
                },
              })}
            />
          </div>
        </div>
        {errors.email && (
          <span className="text-red-500 text-start w-full pl-1">
            {errors.email.message}
          </span>
        )}

        {/* Role ===================================================*/}
        {(userLogged?.role === 'Admin' || userLogged?.role === 'Doctor') && (
          <>
            <div
              className="w-full flex flex-col items-start gap-1"
              aria-labelledby="role"
            >
              <div className="w-full border-2 flex flex-nowrap border-cyan-700 justify-between z-0 rounded-[5px] py-4 px-4 bg-boxBackground border-button">
                <select
                  className="w-full h-full bg-transparent border-none outline-none"
                  id="role"
                  {...register('role', {
                    required: {
                      value: true,
                      message: 'El rol es obligatorio',
                    },
                  })}
                  defaultValue="Patient" // Valor por defecto
                >
                  {userLogged?.role == 'Admin' && (
                    <option
                      className="text-xs font-semibold italic text-red-600"
                      value="Admin"
                    >
                      Admin
                    </option>
                  )}
                  <option
                    className="text-xs font-semibold italic text-green-500"
                    value="Doctor"
                  >
                    Doctor
                  </option>
                  <option
                    className="text-xs font-semibold italic text-blue-600"
                    value="Secretary"
                  >
                    Secretary
                  </option>
                  <option
                    className="text-xs font-thin italic text-blue-600"
                    value="Patient"
                  >
                    Patient
                  </option>
                </select>
              </div>
            </div>
            {errors.role && (
              <span className="text-red-500 text-start w-full pl-1">
                {errors.role.message}
              </span>
            )}{' '}
          </>
        )}
        {/* Contraseña ===================================================*/}
        {!userToEdit && (
          <>
            {' '}
            <div
              className=" w-full flex flex-col items-start gap-1"
              aria-labelledby="passwod"
            >
              <div className="w-full border-2 flex flex-nowrap border-cyan-700 justify-between z-0 rounded-[5px]  py-4 px-4 bg-boxBackground border-button">
                <input
                  className={``}
                  type="text"
                  id="passwod"
                  placeholder="Ingresa una contraseña"
                  {...register('password', {
                    required: {
                      value: true,
                      message:
                        'La contraseña es obligatorias. Debe incluir al menos un número, un caracter especial, una mayúscula y una minúscula',
                    },
                    minLength: {
                      value: 8,
                      message:
                        'Debe ingresar una contraseña con un mínimo de 8 caracteres',
                    },
                    maxLength: {
                      value: 128,
                      message:
                        'La contraseña debe tener un máximo de 128 caracteres',
                    },
                  })}
                />
              </div>
            </div>
            {errors.password && (
              <span className="text-red-500 text-start w-full pl-1">
                {errors.password.message}
              </span>
            )}
          </>
        )}
        {/* <PrincipalBtn type="submit">Registrarse</PrincipalBtn> */}
        <button
          type="submit"
          disabled={!isDirty}
          className={`${
            !isDirty
              ? 'bg-slate-200 text-cyan-900'
              : ' text-cyan-700 hover:text-white hover:bg-cyan-700 transition-all duration-150'
          } border-2 px-6 py-2 rounded-xl`}
        >
          {!isDirty
            ? 'Deshabilitado'
            : userToEdit
            ? 'Editar Usuario'
            : 'Crear Usuario'}
        </button>
      </form>
    </section>
  );
}
