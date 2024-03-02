import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import ReduxProvider from './providers';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

import AppHeader from '../components/AppHeader/AppHeader';
import theme from './theme';

import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <ReduxProvider>
            <body className={montserrat.className}>
              <main className="flex min-h-screen flex-col">
                <AppHeader />

                {children}

              </main>
            </body>
          </ReduxProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
