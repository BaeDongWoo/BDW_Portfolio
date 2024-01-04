import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '배동우 포트폴리오',
  description: '프론트엔드 개발자를 꿈꾸는 취준생',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta></meta>
      <body>{children}</body>
    </html>
  );
}
