import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://bdw-portfolio.vercel.app'),
  title: '배동우 | 포트폴리오',
  description: '프론트엔드 개발자를 꿈꾸는 배동우의 포트폴리오입니다.',
  keywords:
    '배동우, 포트폴리오, 개발자, 프론드엔드, 프론트엔드 포트폴리오, 프론트엔드 개발자',
  icons: {
    icon: '/favi.ico',
  },
  verification: {
    google: 'A7biAGh2S8sojeZl2baYrK_3ZvhvRgp8CNRLk1uzdiE',
  },
  openGraph: {
    images: [
      {
        url: 'https://bdw-portfolio.vercel.app/BDW_01.png',
        alt: '배동우의 포트폴리오 이미지',
      },
    ],
    description: '배동우의 포트폴리오입니다.',
    title: '배동우 | 포트폴리오',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body>{children}</body>
    </>
  );
}
