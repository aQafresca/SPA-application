import { AppBar, Toolbar, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { BaseButton } from '@/components/buttons/base';
import { LogoutButton } from '@/components/buttons/logout';
import { ButtonLabel } from '@/constants';
import { useAppSelector } from '@/core/hooks/useRedux';
import { RouterManager } from '@/route/manager';

export const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <AppBar sx={{ position: 'static', mb: '2rem' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Link component={RouterLink} to={RouterManager.makeURL('home')} sx={{ textDecoration: 'none' }}>
          SPA
        </Link>
        {isAuth ? <LogoutButton /> : <BaseButton to={RouterManager.makeURL('login')}>{ButtonLabel.LOGIN}</BaseButton>}
      </Toolbar>
    </AppBar>
  );
};
