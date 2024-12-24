"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Ugandan-Made
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-yellow-400 transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="/contributors"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contributors
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contribute"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
          >
            Contribute
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link
            href="/"
            className="block py-2 hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="block py-2 hover:text-yellow-400 transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="/contributors"
            className="block py-2 hover:text-yellow-400 transition duration-300"
          >
            Contributors
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contribute"
            className="block py-2 bg-yellow-400 text-gray-900 px-4 rounded hover:bg-yellow-500 transition duration-300 mt-2"
          >
            Contribute
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
