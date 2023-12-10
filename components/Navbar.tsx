"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Image from "next/image";
import logo from "../public/weavy-modified.gif";

export default function Navbar(context: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession(context);
      setSession(session);
    };

    fetchData();
  }, [context]);

  const handleSignOut = () => {
    setShowConfirmation(true);
  };

  const cancelSignOut = () => {
    setShowConfirmation(false);
  };

  const confirmSignOut = () => {
    signOut();
    setShowConfirmation(false);
  };

  return (
    <header className="py-3 bg-black shadow-lg rounded-b-lg top-0 left-0 right-0 ">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 py-0 flex items-center justify-between">
        <Image src={logo} className="h-14 w-auto" alt="" />
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

            {session && (
              <li>
                <button className="text-white" onClick={handleSignOut}>
                  Sign out
                </button>
                {showConfirmation && (
                  <div>
                    <p className="text-white">
                      Are you sure you want to sign out?
                    </p>
                    <button
                      className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 mr-2"
                      onClick={confirmSignOut}
                    >
                      Yes
                    </button>
                    <button
                      className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600"
                      onClick={cancelSignOut}
                    >
                      No
                    </button>
                  </div>
                )}
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
