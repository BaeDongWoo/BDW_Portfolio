import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '배동우 | 포트폴리오',
  description: '프론트엔드 개발자를 꿈꾸는 배동우의 포트폴리오 입니다.',
  keywords:
    '배동우,포트폴리오,개발자,프론드엔드,프론트엔드 포트폴리오,프론트엔드 개발자',
  icons: {
    icon: '/favi.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="A7biAGh2S8sojeZl2baYrK_3ZvhvRgp8CNRLk1uzdiE"
        />
      </head>
      <meta property="og:title" content="배동우 | 포트폴리오" />
      <meta property="og:description" content="배동우의 포트폴리오 입니다." />
      <meta property="og:image" content="../../public/123.jpg" />
      <body>{children}</body>
    </html>
  );
}
