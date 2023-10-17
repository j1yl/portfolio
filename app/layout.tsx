import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joe L. Lee",
  description:
    "A designer, developer, and business owner who engineers digital experience & interaction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interTight.className}>{children}</body>
    </html>
  );
}
