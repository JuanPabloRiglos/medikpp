import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
//importaciones locales
import useAuthStore from '../store/authStore.ts';
import useUserStore from '../store/userStore.ts';
//hooks
import { useAuth } from '../hooks/useAuth.ts';

//types
import { LoginData } from '../types/Auth.ts';

//componentes
//iconos
import { CloseEye } from '../assets/icons/formIcons/CloseEye.tsx';
import { OpenEye } from '../assets/icons/formIcons/OpenEye.tsx';

export default function Login() {
  const { setToken } = useAuthStore();
  const { setUser, user } = useUserStore();
  const [psswVisible, setPsswVisible] = useState(false); //pssword visibilty
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      //isDirty,
      errors,
    },
  } = useForm<LoginData>({
    defaultValues: {
      email: user?.email || '', // Establece el email del usuario si existe
    },
  }); //variables del form state

  const { loginFnHook } = useAuth();

  // Actualiza el formulario cuando el valor de user cambie
  useEffect(() => {
    if (user?.email) {
      reset({ email: user.email }); // Actualiza el campo email
    }
  }, [user, reset]);

  //fn para registrar
  const registerSubmit: SubmitHandler<LoginData> = async (data) => {
    const { responseData, error } = await loginFnHook(data);
    if (responseData) {
      setToken(responseData.token);
      setUser(responseData.userLogged);
      Swal.fire(
        '¡Inicio exitoso!',
        'Redirigiendo al panel principal...',
        'success'
      );
      navigate('/dashboard');
    } else {
      Swal.fire(
        'Error en el registro',
        error || 'Ocurrió un error desconocido',
        'error'
      );
    }
  };

  return (
    <section className="min-h-svh overflow-y-scroll w-full flex flex-col justify-start items-center gap-6 pb-4  ">
      <header className="w-screen bg-blue-500 pt-4 flex justify-start items-end">
        <h3 className="text-lg font-semibold text-white md:w-full md:text-center">
          Medikpp
        </h3>
      </header>
      <h2 className="uppercase text-center mt-6 text-lg font-bold text-cyan-600">
        bienvenido de nuevo!
      </h2>

      <span className=" text-secondaryText hover:scale-105 transition-all duration-150">
        ¿No tienes una cuenta?{' '}
        <Link
          to="/register"
          className="text-cyan-600 hover:cursor-pointer hover:font-semibold"
        >
          Registrate
        </Link>{' '}
      </span>
      <form
        onSubmit={handleSubmit(registerSubmit)}
        role="form"
        className="w-11/12 flex flex-col items-center gap-4"
      >
        {/* EMAIL ===================================================*/}
        <div
          className="w-full flex flex-col items-start gap-1"
          aria-labelledby="email"
        >
          <label className="italic" htmlFor="email">
            Email
          </label>
          <div className="w-full border-2 flex flex-nowrap border-cyan-700 justify-between z-0 rounded-[5px]  py-4 px-4 bg-boxBackground border-button text-effects">
            <input
              className={``}
              type="email"
              id="email"
              placeholder="Ingresa tu direción de correo"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Debe indicar su email',
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

        {/* Contraseña ===================================================*/}
        <div
          className=" w-full flex flex-col items-start gap-1"
          aria-labelledby="passwod"
        >
          <label className="italic" htmlFor="passwod">
            Contraseña
          </label>
          <div className="w-full border-2 flex flex-nowrap border-cyan-700 justify-between z-0 rounded-[5px]  py-4 px-4 bg-boxBackground border-button">
            <input
              className={``}
              type={psswVisible ? 'text' : 'password'}
              id="passwod"
              placeholder="Password here"
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

            <span onClick={() => setPsswVisible(!psswVisible)}>
              {!psswVisible ? (
                <CloseEye
                  styles={
                    ' text-effects1 items-end z-10 hover:cursor-pointer hover:scale-95 transition-all duration-100'
                  }
                />
              ) : (
                <OpenEye
                  styles={
                    ' text-effects1 items-end z-10 hover:cursor-pointer hover:scale-95 transition-all duration-100'
                  }
                />
              )}
            </span>
          </div>
        </div>
        {errors.password && (
          <span className="text-red-500 text-start w-full pl-1">
            {errors.password.message}
          </span>
        )}
        {/* <PrincipalBtn type="submit">Registrarse</PrincipalBtn> */}
        <button
          type="submit"
          className="border-2 px-6 py-2 rounded-xl text-cyan-700 hover:text-white hover:bg-cyan-700 transition-all duration-150"
        >
          Ingresar
        </button>
      </form>
    </section>
  );
}
