"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto h-[8vh] flex justify-between items-center relative px-2 md:px-8 py-0 text-light">
      <Link href="/" className="text-3xl">
        LEFO
      </Link>
      <button
        className="block md:hidden h-[40px] w-[40px] absolute top-[50%] right-[0px] -translate-y-1/2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
          <ul className="flex md:hidden absolute top-[60px] left-0 flex-col items-center w-full h-[90vh] bg-white">
            <li className="list-none py-6">
              <Link
                href="/"
                className="text-base block w-full"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                HOME
              </Link>
            </li>
            <li className="list-none py-6">
              <Link
                href="/about"
                className="text-base block w-full"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                ABOUT
              </Link>
            </li>
            <li className="list-none py-6">
              <Link
                href="/works"
                className="text-base block w-full"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                WORKS
              </Link>
            </li>
          </ul>
        )}
        <ul className="hidden md:flex items-center w-full gap-10">
          <li className="list-none">
            <Link
              href="/"
              className="text-base block w-full"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              HOME
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/about"
              className="text-base block w-full"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              ABOUT
            </Link>
          </li>
          <li className="list-none">
            <Link
              href="/works"
              className="text-base block w-full"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              WORKS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
