import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';
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
      <Head>
        <meta
          name="google-site-verification"
          content="A7biAGh2S8sojeZl2baYrK_3ZvhvRgp8CNRLk1uzdiE"
        />
      </Head>
      <meta property="og:title" content="배동우 | 포트폴리오"></meta>
      <meta
        property="og:description"
        content="배동우의 포트폴리오 입니다."
      ></meta>
      <meta
        property="og:image"
        content="https://bdw-portfolio.vercel.app/BDW_01.png"
      ></meta>
      <meta property="og:image:alt" content="배동우의 포트폴리오 이미지"></meta>
      <body>{children}</body>
    </html>
  );
}
