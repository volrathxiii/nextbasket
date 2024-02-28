// src/app/theme.tsx
'use client';
import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

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
  typography: {
    fontFamily: montserrat.style.fontFamily,
    fontSize: 14,
    button: {
        textTransform: "none"
      }
  },
  palette: {
    action: {
        main: '#fff',
        light: '#737373',
        dark: '#fff',
        contrastText: '#fff'
    },
  }
});

export default theme;