import { Box, Link, Container, Typography } from '@mui/material';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        borderTop: '1px solid rgba(255,255,255,0.3)',
        padding: '1rem 0',
        bgcolor: 'background.paper',
        color: 'text.secondary',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 1, sm: 0 },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="body2">
            &copy; {currentYear}{' '}
            <Link
              href={'https://innowise.com/'}
              target={'_blank'}
              rel="noopener noreferrer"
              color="inherit"
              sx={{
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
                fontWeight: 'bold',
              }}
            >
              Innowise
            </Link>
            . All rights reserved.
          </Typography>

          <Link
            href={'https://github.com/aQafresca'}
            target={'_blank'}
            rel="noopener noreferrer"
            color="inherit"
            variant="body2"
            sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            Siarhei Buiko
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
