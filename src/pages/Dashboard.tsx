import { ManagementUsers } from '../components/common/managementUsers';
import useUserStore from '../store/userStore';
// import AppointmentCalendar from '../components/common/calendar/Calendar';

//componentes

export default function Dashboard() {
  const { userLogged } = useUserStore();
  console.log('USER EN DASHBOARD', userLogged);
  return (
    <main className="w-full flex flex-col items-start gap-4">
      <header className="w-full p-2 border-b-2">
        <h2 className="font-semibold">Panel Principal de {userLogged?.role}</h2>
      </header>
      {/* <section>
        <AppointmentCalendar />
      </section> */}
      {userLogged && userLogged.role != 'Patient' && (
        //Crea y edita usuarios
        // usa el post de users, no el de auth/rgister
        // pensando para roles con mas facultades
        <ManagementUsers styles="w-full flex flex-col items-center gap-4" />
      )}
    </main>
  );
}
