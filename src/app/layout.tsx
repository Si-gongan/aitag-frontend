import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Head from 'next/head';

export const metadata: Metadata = {
  title: '글공방',
  description: 'AI 대체 텍스트 제작 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="16x16" />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
