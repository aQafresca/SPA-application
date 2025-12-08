import { Box, Container } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Loader from '@/components/loader';

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container
        component={'main'}
        sx={{
          flexGrow: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '2rem auto',
        }}
      >
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
