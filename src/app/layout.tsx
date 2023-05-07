import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Joe Lee | Software Engineer Portfolio",
  description:
    "Welcome to the portfolio of Joe Lee, a skilled web developer with experience in building beautiful and performant websites. Browse my projects and contact me to discuss your next web development project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
