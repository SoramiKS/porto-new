import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0  border-gray-600 backdrop-blur font-android fadeInDown-animation">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-20">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          .Portofolio
        </span>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="https://wa.link/qn2g58"
            target="_blank"
            rel="noopener noreferrer"
            className="grow text-white bg-green-700 p-3 rounded-2xl border border-green-600 hover:border-gray-700 inline-block text-center hover:gradient-bg animate-gradient relative"
          >
            Message Me 📧
          </a>

          <button
            onClick={toggleMenu} // Menangani toggle menu
            type="button"
            className="absolute top-4 right-4 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded md:p-0 gradient-text animate-gradient grow"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 md:p-0 text-white hover:gradient-text animate-gradient grow"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 md:p-0 text-white hover:gradient-text animate-gradient grow"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#educations"
                className="block py-2 px-3 md:p-0 text-white hover:gradient-text animate-gradient grow"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 px-3 md:p-0 text-white hover:gradient-text animate-gradient grow"
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
