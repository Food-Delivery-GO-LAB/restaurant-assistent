import { createTheme } from '@mui/material/styles';
import { colors } from '../styles/variables';

export interface CustomTheme {
  bg: {
    main: string;
    light: string;
    grey: string;
  };
  text: {
    primary: string;
    green: string;
    white: string;
    black: string;
  };
  sidebar: {
    background: React.CSSProperties['color'];
    boxShadow: React.CSSProperties['color'];
    width: string;
    textColor: React.CSSProperties['color'];
    dividerBg: React.CSSProperties['color'];
    menuItemColor: React.CSSProperties['color'];
    menuItemColorActive: React.CSSProperties['color'];
    menuItemBg: React.CSSProperties['color'];
    menuItemBgActive: React.CSSProperties['color'];
    menuItemIconColor: React.CSSProperties['color'];
    menuItemIconColorActive: React.CSSProperties['color'];
    menuItemHeadingColor: React.CSSProperties['color'];
  };
  header: {
    height: string;
    background: string;
    boxShadow: string;
    textColor: string;
  };
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'string';
        };
      };
    };
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
    grey: '#f8f8f8',
  },
  text: {
    primary: colors.primary,
    green: colors.green,
    white: colors.white,
    black: colors.dark,
  },
  sidebar: {
    background: colors.white,
    textColor: colors.green,
    dividerBg: '#f2f5f9',
    menuItemColor: '#242E6F',
    menuItemColorActive: colors.primary,
    menuItemBg: 'transparent',
    menuItemBgActive: '#f2f5f9',
    menuItemIconColor: colors.green_lighter,
    menuItemIconColorActive: colors.primary,
    menuItemHeadingColor: colors.green_hover,
    boxShadow:
      '2px 0 3px rgba(159, 162, 191, 0.18), 1px 0 1px rgba(159, 162, 191, 0.32)',
    width: '280px',
  },
  header: {
    height: '50px',
    background: colors.white,
    boxShadow: colors.shadows.cardSm,
    textColor: colors.green,
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,0,0,0.2)',
        },
      },
    },
  },
});
