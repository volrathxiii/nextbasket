import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import ReduxProvider from './providers';
import { Montserrat } from 'next/font/google';
import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '@/components/AppFooter/AppFooter';
import theme from './theme';
import "./globals.css";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NextBasket",
  description: "Best e-commerce site you can depend on!",
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
                <AppFooter />
              </main>
            </body>
          </ReduxProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
