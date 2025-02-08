// src/routes/AppRouter.tsx
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner'; // Componente de carga reutilizable

// Lazy imports
const Layout = lazy(() => import('../components/layout/Layout'));
const Home = lazy(() => import('../pages/Home.tsx'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Profile = lazy(() => import('../pages/Profile'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Rutas con layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
