import { useState } from "react";
import { Link } from "react-scroll";

interface Link {
  id: string;
  name: string;
  href: string;
}

const navLinks = [
  {
    id: "1",
    name: "Home",
    href: "home",
  },
  {
    id: "2",
    name: "About",
    href: "about",
  },
  {
    id: "3",
    name: "Works",
    href: "works",
  },
  {
    id: "4",
    name: "Contact",
    href: "contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex w-full items-center justify-between p-4">
      <Link href="/" className="text-2xl">
        lefodev
      </Link>
      <button
        className="absolute top-[50%] right-[0px] block h-[40px] w-[40px] -translate-y-1/2 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="black"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div>
        {isOpen && (
          <ul className="absolute top-[60px] left-0 flex h-[90vh] w-full flex-col items-center bg-[#eeeeee] md:hidden">
            {navLinks.map((link: Link) => (
              <li
                className="flex w-full justify-center p-4 text-sm"
                key={link.id}
              >
                <Link
                  to={link.href}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <ul className="hidden w-full items-center gap-4 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.href} smooth={true} duration={500}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
