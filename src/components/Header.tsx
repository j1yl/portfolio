const Header = () => {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-10 bg-zinc-100">
        <nav className="mx-auto max-w-6xl flex flex-row justify-between py-6 px-4 md:px-0 items-center text-zinc-900">
          <a href="/" className="text-xl font-medium">
            LEFO
          </a>
          <div className="flex gap-4 text-sm font-medium">
            <a href="/">HOME</a>
            <a href="/">ABOUT</a>
            <a href="/">WORKS</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
