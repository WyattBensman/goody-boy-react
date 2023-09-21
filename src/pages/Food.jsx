import { useState } from "react";
export function Food() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-300 fixed top-0 w-full shadow-md p-6">
        <div className="w-full relative flex justify-between">
          {/* Brand */}
          <a href="#" className="md:hidden text-2xl font-bold text-gray-800">
            Goody Boy Diner
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
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          {/* NavBar Items */}
          <ul className="flex md:flex-row flex-col justify-center items-center mx-auto md:space-x-12 text-xl text-center font-light text-white">
            <li className="nav-item md:mt-0 md:mb-0 mt-4 mb-1">
              <a
                href="#"
                className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
              >
                HOME
              </a>
            </li>
            <li className="nav-item md:my-0 my-1">
              <a
                href="#"
                className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
              >
                DRINKS
              </a>
            </li>
            <img
              src="./images/branding/navbar-logo.png"
              className="h-24"
              alt=""
            />
            <li className="nav-item md:my-0 my-1">
              <a
                href="#"
                className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
              >
                CONTACT
              </a>
            </li>
            <li className="nav-item md:my-0 my-1">
              <a
                href="#"
                className="hover:text-[#ED2122] hover:border-b hover:border-[#ED2122] duration-300"
              >
                ORDER
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
