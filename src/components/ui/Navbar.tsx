"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center h3 whitespace-nowrap">Joe Lee</span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-950 focus:text-gray-700 rounded-lg md:hidden focus:ring-2 focus:ring-gray-700"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="block py-2 pr-4 rounded md:bg-transparent md:p-0"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/resume"
                  className="block py-2 pr-4 rounded md:bg-transparent md:p-0"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 pr-4 rounded md:bg-transparent md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {isOpen && (
          <div id="navbar-default" className="p-4">
            <ul className="flex flex-col p p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="block py-2 pr-4 rounded md:bg-transparent md:p-0"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/resume"
                  className="block py-2 pr-4 rounded md:bg-transparent md:p-0"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 pr-4 rounded md:bg-transparent md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
