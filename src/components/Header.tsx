import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-10 bg-zinc-100">
        <nav className="mx-auto max-w-6xl flex flex-row justify-between py-4 px-4 md:px-0 items-center text-zinc-900">
          <a href="/" className="text-xl font-medium">
            LEFO
          </a>
          <div className="flex gap-4 text-sm font-medium">
            <Link
              to="main"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              HOME
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              ABOUT
            </Link>
            <Link
              to="works"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              WORKS
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
