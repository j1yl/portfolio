import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
