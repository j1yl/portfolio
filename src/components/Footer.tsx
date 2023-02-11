import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-w-6xl mx-auto flex w-full max-w-6xl flex-row justify-end p-4 text-sm">
      <div className="flex gap-4 text-primary_dark dark:text-primary_white">
        <Link href="https://github.com/j1yl">GitHub</Link>
        <Link href="https://linkedin.com/in/j1yl">LinkedIn</Link>
      </div>
    </footer>
  );
};

export default Footer;
