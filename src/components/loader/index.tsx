import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { type JSX } from 'react';

const Loader = (): JSX.Element => {
  return (
    <Box sx={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
