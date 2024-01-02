import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeNav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past one full screen width
      const scrolled = window.scrollY > window.innerHeight;

      // Update the state accordingly
      setHasScrolled(scrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        hasScrolled ? "shadow-md" : ""
      } bg-blue-300 fixed top-0 w-full p-6 md:p-9 z-10`}
    >
      <div className="w-full relative flex justify-between items-center">
        {/* Brand */}
        <a href="#" className="md:hidden text-2xl font-bold text-gray-800">
          <img
            src="./images/branding/goody-boy-logo-text.png"
            className="h-14"
            alt=""
          />
        </a>
        {/* Toggle Button */}
        <button
          className="flex justify-end text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div
        className={
          "md:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        {/* NavBar Items */}
        <ul className="flex md:flex-row flex-col md:mx-auto md:space-x-12 text-xl md:font-light text-white">
          <li className="nav-item md:mt-0 md:mb-0 mt-4 mb-1">
            <Link
              to="/food"
              className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
            >
              FOOD
            </Link>
          </li>
          <li className="nav-item md:my-0 my-1">
            <Link
              to="/drinks"
              className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
            >
              DRINKS
            </Link>
          </li>
          <li className="nav-item md:my-0 my-1">
            <Link
              to="/contact"
              className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
            >
              CONTACT
            </Link>
          </li>
          <li className="nav-item md:my-0 my-1">
            <a
              href="https://www.ubereats.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
            >
              ORDER
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
