import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@/core/hooks/useRedux';
import { RouterManager } from '@/route/manager';

const PublicRoute = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return isAuth ? <Navigate to={RouterManager.makeURL('home')} /> : <Outlet />;
};

export default PublicRoute;
