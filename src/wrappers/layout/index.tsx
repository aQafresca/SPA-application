import { Container } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Container component={'main'}>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
