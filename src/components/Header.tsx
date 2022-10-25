const navLink = "sm:px-0 md:px-5 py-1 bg-slate-300 rounded-xl shadow-md";

const Header = () => {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-10">
        <nav className="mx-auto max-w-4xl flex flex-row justify-between py-6 items-center">
          <a href="/" className="text-2xl font-bold">
            LefoDev
          </a>
          <div className="flex gap-10 text-base">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Works</a>
          </div>
          <a href="/" className="text-base">
            Let&apos;s Talk
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
