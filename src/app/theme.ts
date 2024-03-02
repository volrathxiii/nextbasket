// src/app/theme.tsx
'use client';
import { Montserrat } from 'next/font/google';
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

/**
 * colors
 */
const action = {
  main: '#fff',
  light: '#737373',
  dark: '#fff',
  contrastText: '#fff'
}

const theme = createTheme({
  shadows: "none",
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    fontSize: 14,
    button: {
      textTransform: "none"
    }
  },
  palette: {
    primary: {
      main: '#23A6F0',
      contrastText: '#fff'
    },
    muted: {
      main: '#737373',
      light: '#FAFAFA',
      contrastText: '#000'
    },
    action: {
      main: '#fff',
      light: '#737373',
      dark: '#fff',
      contrastText: '#fff'
    },
  }
});

export default theme;