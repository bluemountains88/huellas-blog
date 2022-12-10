'use client';
import { UserProvider } from '@auth0/nextjs-auth0';
import Navigation from '../components/Navigation';
import { font } from './font';
import '../styles/global.css';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <UserProvider>
        <head />
        <body className={font.className}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
