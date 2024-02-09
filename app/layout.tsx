import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const lato = Spectral({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

const gotham = localFont({
  src: [
    {
      path: "../fonts/Gotham_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gotham_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Gotham_Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Joe L. Lee",
  description:
    "A designer, developer, and business owner who engineers digital experience & interaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gotham.className} leading-4 text-xs flex min-h-screen md:p-4 p-2 w-full bg-neutral-950 text-white`}
      >
        <div className="flex flex-grow h-full w-full md:mt-8">{children}</div>
      </body>
    </html>
  );
}
