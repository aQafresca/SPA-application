import { useNavigate } from 'react-router-dom';

import { BaseButton } from '@/components/buttons/base';
import { ButtonLabel } from '@/constants';
import { useAppDispatch } from '@/core/hooks/useRedux';
import { RouterManager } from '@/route/manager';
import { logOut } from '@/store/auth';

export const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    void navigate(RouterManager.makeURL('login'));
  };

  return <BaseButton onClick={handleLogout}>{ButtonLabel.LOGOUT}</BaseButton>;
};
