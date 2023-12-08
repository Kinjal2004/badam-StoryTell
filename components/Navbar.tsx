"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-3 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg rounded-b-lg fixed top-0 left-0 right-0 ">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 py-0.05 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Weavy</h1>
        <button
          className="sm:hidden block text-white hover:text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger icon */}
          {isOpen ? (
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M17.293 4.293a1 1 0 0 0-1.414-1.414L10 8.586 4.121 2.707a1 1 0 1 0-1.414 1.414L8.586 10 2.707 15.879a1 1 0 0 0 1.414 1.414L10 11.414l5.879 5.879a1 1 0 0 0 1.414-1.414L11.414 10l5.879-5.879a1 1 0 0 0 0-1.414z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4.5a.5.5 0 1 1 0-1h14a.5.5 0 1 1 0 1H3zm0 5a.5.5 0 1 0 0 1h14a.5.5 0 1 0 0-1H3zm0 5a.5.5 0 1 0 0 1h14a.5.5 0 1 0 0-1H3z"
              />
            </svg>
          )}
        </button>
        <nav className={`sm:flex ${isOpen ? "block" : "hidden"} mt-14 sm:mt-0`}>
          <ul className="sm:flex sm:space-x-6">
            <li>
              <Link legacyBehavior href="/" passHref>
                <a className="text-white hover:text-gray-300 transition duration-300">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/profile" passHref>
                <a className="text-white hover:text-gray-300 transition duration-300">
                  Profile
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/create" passHref>
                <a className="text-white hover:text-gray-300 transition duration-300">
                  Create
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
