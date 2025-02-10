import useUserStore from '../store/userStore';

export default function Dashboard() {
  const { user } = useUserStore();
  console.log('USER EN DASHBOARD', user);
  return <h2>Dashboard {user?.email}</h2>;
}
