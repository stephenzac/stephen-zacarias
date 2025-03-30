import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import { MainContainer } from '@/components/app/main-container';
import { NavBar } from '@/components/app/nav-bar';
import { Footer } from '@/components/app/footer';
import { LineDivider } from '@/components/app/line-divider';

const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stephen Zacarias | Portfolio',
  description: 'The personal portfolio of Stephen Zacarias',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={robotoMono.className} suppressHydrationWarning={true}>
        <div className='flex justify-center'>
          <MainContainer>
            <NavBar />
            <LineDivider />
            {children}
            <LineDivider />
            <Footer />
          </MainContainer>
        </div>
      </body>
    </html>
  );
}
