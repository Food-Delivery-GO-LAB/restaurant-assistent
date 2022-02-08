import { createTheme } from '@mui/material/styles';
import { colors } from '../styles/variables';

export interface CustomTheme {
  bg: {
    main: string;
    light: string;
  };
  text: {
    green: string;
    white: string;
    black: string;
  };
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.green,
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans, IBM Plex Serif, Roboto, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  bg: {
    main: '#fff',
    light: '#FDF6F0',
  },
  text: {
    green: colors.green,
    white: colors.white,
    black: colors.dark,
  },
});
