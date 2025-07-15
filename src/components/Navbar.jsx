import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 font-android ${
      scrolled ? 'glass-nav' : 'bg-transparent'
    }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-6 md:px-20">
        <span className="self-center text-2xl font-bold whitespace-nowrap neon-text">
          &lt;/Emiliano&gt;
        </span>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="#contact"
            className="cyber-button hidden md:block"
          >
            Let's Connect
          </a>

          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg hover:text-cyan-400 transition-colors"
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 glass-card md:glass-card-none md:bg-transparent">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 rounded md:p-0 neon-text hover:neon-purple transition-all duration-300"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 md:p-0 text-white hover:text-cyan-400 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 md:p-0 text-white hover:text-cyan-400 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="block py-2 px-3 md:p-0 text-white hover:text-cyan-400 transition-all duration-300"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 md:p-0 text-white hover:text-cyan-400 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}