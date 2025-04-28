import { ArticleComponent } from '../components/ui/ArticleComponent.tsx';
import { NavlinkComponent } from '../components/ui/Navlink.tsx';
import { H2Component } from '../components/ui/h2Component.tsx';

const Home = () => {
  return (
    <>
      {/* Seccion del Hero  */}
      <figure
        className="w-[90%] h-full mx-auto max-w-[400px]
          md:w-[40%]
        "
      >
        <img src="/DoctorHomeImg.png" alt="imagen de animacion de un doctor" />
      </figure>
      <ArticleComponent>
        <H2Component> Bienvenidos !</H2Component>
        <h4 className="text-lg font-semibold">En nuestra aplicación podrás</h4>
        <div
          className="flex flex-col gap-2 
          sm:flex-row
          md:flex-col
          lg:flex-row"
        >
          <NavlinkComponent route="visitor/login">
            Reservar una cita médica
          </NavlinkComponent>

          <NavlinkComponent route="visitor/login">
            Consultar perfil médico
          </NavlinkComponent>
        </div>
        <span className="text-lg font-semibold">Si Sos Doctor </span>
        <div
          className="flex flex-col gap-2 
          sm:flex-row
          md:flex-col
          lg:flex-row"
        >
          <NavlinkComponent route="visitor/login">
            <p> Trabjar con nosotros</p>
          </NavlinkComponent>

          <NavlinkComponent route="visitor/login">
            <p> Consultar tu agenda</p>
          </NavlinkComponent>
        </div>
      </ArticleComponent>
    </>
  );
};

export default Home;
