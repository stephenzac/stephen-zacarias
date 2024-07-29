import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import TopScrollBar from "../components/top-scroll-bar";

const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stephen Zacarias | Portfolio",
  description: "My personal portfolio!",
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
        {children}
      </body>
    </html>
  );
}
