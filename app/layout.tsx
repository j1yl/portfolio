import "./globals.css";
import { Montserrat } from "@next/font/google";
const mont = Montserrat();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mont.className}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
