import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-rose-400 shadow-md" : "bg-transparent"
      } text-gray-600 p-4`}
    >
      <div className="flex justify-between items-center w-full">
        <Link
          to="/#"
          onClick={() => {
            closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-3xl font-bold text-white text-left animate-fadeInLeft"
        >
          Elena Gregov || Portfolio
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-32 text-white">
            <li>
              <Link
                smooth
                to="/#about"
                className="hover:underline"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#projects"
                className="hover:underline"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/certificates"
                className="hover:underline"
                onClick={closeMenu}
              >
                Certificates
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#contact"
                className="hover:underline"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Side drawer menu */}
      <nav
        className={`fixed top-0 right-0 h-screen w-64 bg-rose-400 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-rose-500">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-6">
          <li>
            <Link
              smooth
              to="/#about"
              className="hover:underline"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              smooth
              to="/#projects"
              className="hover:underline"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/certificates"
              className="hover:underline"
              onClick={closeMenu}
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              smooth
              to="/#contact"
              className="hover:underline"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
