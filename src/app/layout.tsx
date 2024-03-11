import type { Metadata } from 'next';
import './globals.css';
import { Menu } from '@/components/menu';

export const metadata: Metadata = {
  title: 'Neko',
  description: 'Next.js course',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Menu />
      <body>{children}</body>
    </html>
  );
}
