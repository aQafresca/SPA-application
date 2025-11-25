import { ButtonLabel } from '@constants/index';
import { AppBar, Button, Toolbar, Link } from '@mui/material';
import { RouterManager } from '@route/manager';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar sx={{ position: 'static' }}>
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
        <Button component={RouterLink} to={RouterManager.makeURL('login')}>
          {ButtonLabel.LOGIN}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
