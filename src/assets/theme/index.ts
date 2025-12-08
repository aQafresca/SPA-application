import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e0ab42',
    },
    secondary: {
      main: 'rgba(245,0,0,0.58)',
    },
    background: {
      default: '#1f1f1f',
      paper: 'rgba(113,113,113,0.19)',
    },
    error: {
      main: '#f54136',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(113,113,113,0.19)',
        },
      },
    },
  },
});
