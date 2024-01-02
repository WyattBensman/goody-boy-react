import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles.css";
import DropdownMenu from "./DropdownMenu";

export function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-blue-300 fixed top-0 w-full shadow-md p-6 md:p-1">
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
        <ul className="flex md:items-center md:flex-row flex-col md:mx-auto md:space-x-12 text-xl md:font-light text-white">
          <li className="nav-item md:mt-0 md:mb-0 mt-4 mb-1 md:pl-8">
            <NavLink
              to="/"
              className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
            >
              HOME
            </NavLink>
          </li>
          <DropdownMenu />
          <img
            src="./images/branding/navbar-logo.png"
            className="h-24 hidden md:flex"
            alt=""
          />
          <li className="nav-item md:my-0 my-1 md:hidden">
            <NavLink
              to="/food"
              className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
            >
              FOOD
            </NavLink>
          </li>
          <li className="nav-item md:my-0 my-1 md:hidden">
            <NavLink
              to="/drinks"
              className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
            >
              DRINKS
            </NavLink>
          </li>
          <li className="nav-item md:my-0 my-1">
            <NavLink
              to="/contact"
              className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
            >
              CONTACT
            </NavLink>
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
