import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@/core/hooks/useRedux';
import { RouterManager } from '@/route/manager';

const PrivateRoute = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return isAuth ? <Outlet /> : <Navigate to={RouterManager.makeURL('login')} />;
};

export default PrivateRoute;
