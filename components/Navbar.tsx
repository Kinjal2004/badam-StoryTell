import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className=" dark:bg-gray-800 shadow-md rounded-lg fixed top-0 left-0 right-0 z-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-300">Bloggify</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-300 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-gray-300 hover:text-black">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/create" className="text-gray-300 hover:text-black">
                Create
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
