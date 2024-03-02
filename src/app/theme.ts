// src/app/theme.tsx
'use client';
import { Montserrat } from 'next/font/google';
import shadows, { Shadows } from '@mui/material/styles/shadows';
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
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
    info: {
      main: '#737373',
      light: '#fff',
      contrastText: '#000'
    }
  }
});

export default theme;