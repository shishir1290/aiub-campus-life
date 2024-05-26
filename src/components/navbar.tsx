import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [scale, setScale] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newScale = Math.max(0.7, 1 - scrollPosition / 8000);
    setScale(newScale);
  };

  const handleNavigation = (section: any) => {
    if (router.pathname !== "/") {
      router.push(`/#${section}`);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="bg-white p-1 shadow-md">
        <p className="text-xl text-left font-bold text-blue-800 ml-2">
          American International University-Bangladesh
        </p>
      </div>
      <nav className="flex items-center justify-center bg-blue-800 text-white p-6 md:p-2 space-x-96">
        <div className="hidden md:flex items-center space-x-72">
          <ul className="flex justify-center text-lg ml-12 space-x-10">
            <li
              onClick={() => handleNavigation("home")}
              style={{ cursor: "pointer" }}
              className=""
            >
              <button className="before:ease relative h-10 w-40 overflow-hidden  text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:rounded-lg hover:before:h-64 hover:before:-translate-y-32">
                <span className="relative z-10">Home</span>
              </button>
            </li>
            <li
              onClick={() => handleNavigation("activity")}
              style={{ cursor: "pointer" }}
            >
              <button className="before:ease relative h-10 w-40 overflow-hidden  text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:rounded-lg hover:before:h-64 hover:before:-translate-y-32">
                <span className="relative z-10">Activities</span>
              </button>
              
            </li>
          </ul>
          <ul className="flex justify-center text-lg space-x-10">
            <li
              onClick={() => handleNavigation("clubs")}
              style={{ cursor: "pointer" }}
            >
              <button className="before:ease relative h-10 w-40 overflow-hidden  text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:rounded-lg hover:before:h-64 hover:before:-translate-y-32">
                <span className="relative z-10">Clubs</span>
              </button>
              
            </li>
            <li
              onClick={() => handleNavigation("facilities")}
              style={{ cursor: "pointer" }}
            >
              <button className="before:ease relative h-10 w-40 overflow-hidden  text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:rounded-lg hover:before:h-64 hover:before:-translate-y-32">
                <span className="relative z-10">Facilities</span>
              </button>
              
            </li>
            <li
              onClick={() => handleNavigation("contact")}
              style={{ cursor: "pointer" }}
            >
              <button className="before:ease relative h-10 w-40 overflow-hidden  text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:rounded-lg hover:before:h-64 hover:before:-translate-y-32">
                <span className="relative z-10">Contact</span>
              </button>
              
            </li>
          </ul>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden flex fixed right-5 p-2 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
      </nav>
      <motion.div
        className={`absolute left-1/2 transform -translate-x-1/2 top-0 mt-1 drop-shadow-lg`}
      >
        <Link href={`/`}>
          <motion.img
            src="/home/logo.png"
            alt="logo"
            width={120}
            height={120}
            style={{ scale: scale }}
            className="cursor-pointer z-50"
          />
        </Link>
      </motion.div>
      {isOpen && (
        <div className="md:hidden absolute top-full right-0 bg-blue-800 w-36 text-white">
          <ul className="py-2 flex flex-col items-end">
            <li
              onClick={() => handleNavigation("home")}
              className="py-2 mr-4 cursor-pointer border-b border-gray-600"
            >
              Home
            </li>
            <li
              onClick={() => handleNavigation("activity")}
              className="py-2 mr-4 cursor-pointer border-b border-gray-600"
            >
              Activities
            </li>
            <li
              onClick={() => handleNavigation("clubs")}
              className="py-2 mr-4 cursor-pointer border-b border-gray-600"
            >
              Clubs
            </li>
            <li
              onClick={() => handleNavigation("facilities")}
              className="py-2 mr-4 cursor-pointer border-b border-gray-600"
            >
              Facilities
            </li>
            <li
              onClick={() => handleNavigation("contact")}
              className="py-2 mr-4 cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
