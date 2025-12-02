import { Container } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/header';
import Loader from '@/components/loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Container component={'main'}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
