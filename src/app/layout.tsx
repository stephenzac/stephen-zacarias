import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { TopScrollBar } from '../components/app/top-scroll-bar';
import { NavBar } from '../components/app/nav-bar';
import { Footer } from '../components/app/footer';
import { MainContainer } from '../components/app/layout/main-container';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { TopScrollBar } from '../components/app/top-scroll-bar';
import { NavBar } from '../components/app/nav-bar';
import { Footer } from '../components/app/footer';
import { MainContainer } from '../components/app/layout/main-container';
import './globals.css';

const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] });
const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stephen Zacarias | Portfolio',
  description: 'My personal portfolio!',
  title: 'Stephen Zacarias | Portfolio',
  description: 'My personal portfolio!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className} suppressHydrationWarning={true}>
        <TopScrollBar />
        <NavBar />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </body>
    </html>
  );
}
