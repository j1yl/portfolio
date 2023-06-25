import Cursor from "@/components/Cursor";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Joe Lee | Web Developer Portfolio | Los Angeles, CA",
  description:
    "Passionate about code and numbers, I'm a highly motivated Computer Science student with a dash of mathematical prowess. Currently pursuing a Bachelor's degree in Computer Science with a minor in Mathematics at California State University, Fullerton, I'm on a mission to bring innovative web solutions to life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ""}>
        <div>
          <Cursor />
          {children}
        </div>
      </body>
    </html>
  );
}
