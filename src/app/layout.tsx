import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/context/AuthProvider';
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';


const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Whisper',
  description: 'Real feedback from real people.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}