import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics
        GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string}
      />
      <body className={interTight.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
