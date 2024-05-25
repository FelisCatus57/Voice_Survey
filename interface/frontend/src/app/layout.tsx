import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Layout from './components/layout/root/layout';

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
        />
      </head>
      <body className={notoSansKr.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
