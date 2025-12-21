import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Metadata } from 'next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Fernando Family Daycare',
  description: 'Welcome to Fernando Family Daycare, where we provide a safe and loving environment for your child to grow and learn.',
  keywords: ['daycare', 'early childhood education', 'Fernando Family Daycare'],
  authors: [{ name: 'Fernando Family Daycare' }],
  creator: 'Fernando Family Daycare',
  publisher: 'Fernando Family Daycare',
  applicationName: 'Fernando Family Daycare',
  referrer: 'origin-when-cross-origin',
  themeColor: '#FFFF00',
  viewport: 'cover-fit=cover',
  colorScheme: 'light'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
