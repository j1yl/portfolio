import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <Link href="/" className="px-4 py-2 text-2xl font-bold">
        lefo.dev
      </Link>
      <div className="flex w-full justify-end text-sm">
        <Link href="/" className="link">
          ABOUT
        </Link>
        <Link href="/" className="link">
          WORKS
        </Link>
        <Link href="/" className="link">
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
