import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';

// const lato = Spectral({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

const gotham = localFont({
  src: [
    {
      path: '../fonts/Gotham_Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/Gotham_Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/Gotham_Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ]
});

export const metadata: Metadata = {
  title: 'Joe L. Lee',
  description:
    'A designer, developer, and business owner who engineers digital experience & interaction.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gotham.className} flex min-h-screen w-full flex-col bg-white text-xs leading-4 text-neutral-950`}
      >
        <Navbar />
        <div className="flex h-full w-full flex-grow p-2 md:p-4">{children}</div>
      </body>
    </html>
  );
}
