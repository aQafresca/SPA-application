import { Box, Link } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mt: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.3)',
        padding: '1rem',
      }}
    >
      <Link href={'https://innowise.com/'} target={'_blank'}>
        Innowise
      </Link>
      <Link href={'https://github.com/aQafresca'} target={'_blank'}>
        Siarhei Buiko
      </Link>
    </Box>
  );
};
