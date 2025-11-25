import { Box, Button, Typography } from '@mui/material';
import { RouterManager } from '@route/manager';
import { Link as RouterLink } from 'react-router-dom';

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        gap: '20px',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button component={RouterLink} to={RouterManager.makeURL('home')} variant="contained">
        Back Home
      </Button>
    </Box>
  );
}
