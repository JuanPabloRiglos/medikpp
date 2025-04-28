/**
 * usuario paciente
 * j@gmail.com
 * Juan123456
 */

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
import { H2Component } from '../components/ui/h2Component.tsx';
import { ArticleComponent } from '../components/ui/ArticleComponent.tsx';
import { PrincipalBtn } from '../components/ui/PrincipalBtn.tsx';

export default function Login() {
  const { setToken } = useAuthStore();
  const { setUser, userLogged } = useUserStore();
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
      email: userLogged?.email || '', // Establece el email del usuario si existe
    },
  }); //variables del form state

  const { loginFnHook } = useAuth();

  // Actualiza el formulario cuando el valor de user cambie
  useEffect(() => {
    if (userLogged?.email) {
      reset({ email: userLogged.email }); // Actualiza el campo email
    }
  }, [userLogged, reset]);

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
    <>
      {/* INICIO SECCION DE FORMLARIO */}

      <ArticleComponent>
        <article className=" w-full flex flex-col gap-4 my-4  justify-center">
          <div className=" w-fit m-auto">
            <H2Component>
              <span>Bienvenid@ de nuevo! </span>
            </H2Component>
          </div>
          <span className="hover:scale-105 transition-all duration-150 text-lg font-semibold text-center">
            ¿No tienes una cuenta?{' '}
            <Link
              to="/visitor/register"
              className="text-contrast font-bold hover:cursor-pointer hover:font-extrabold"
            >
              Registrate
            </Link>{' '}
          </span>
        </article>

        <form
          onSubmit={handleSubmit(registerSubmit)}
          role="form"
          className="w-11/12 m-auto flex flex-col items-center gap-4"
        >
          {/* EMAIL ===================================================*/}
          <div
            className="w-full flex flex-col items-start gap-1"
            aria-labelledby="email"
          >
            <label className="italic font-semibold" htmlFor="email">
              Email
            </label>
            <div className="w-full border-2 flex flex-nowrap border-contrast justify-between z-0 rounded-xl  py-4 px-4 bg-transparent font-semibold ">
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
            <label className="italic font-semibold" htmlFor="passwod">
              Contraseña
            </label>
            <div className="w-full border-2 bg-transparent flex flex-nowrap border-contrast justify-between z-0 rounded-xl font-semibold py-4 px-4 ">
              <input
                className=""
                type={psswVisible ? 'text' : 'password'}
                id="passwod"
                placeholder="Ingrese una contraseña"
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

          <PrincipalBtn btnType="submit">Ingresar</PrincipalBtn>
        </form>
      </ArticleComponent>

      <figure className="h-full">
        <img
          src="/Login-img.png"
          alt="imagen de animacion persona entrando app"
        />
      </figure>
    </>
  );
}
