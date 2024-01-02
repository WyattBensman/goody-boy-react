import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function DropdownMenu() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div
      onMouseOver={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
      className="relative md:mt-0 mt-3 text-xl md:font-light text-white"
    >
      <p className="hover:text-[#ED2122] hover:cursor-pointer duration-300">
        MENUS <i className="fa-solid fa-caret-down fa-2xs text-white"></i>
      </p>

      {isDropdownVisible && (
        <div className="absolute z-10 bg-white divide-y divide-gray-100 shadow w-44 left-1/2 transform -translate-x-1/2 text-center text-xl border">
          <ul className="py-2 text-lg text-[#182d27]">
            <li className="py-2 px-4">
              <NavLink
                to="/food"
                className="hover:text-red-600 hover:font-normal duration-200"
              >
                FOOD
              </NavLink>
            </li>
            <li className="py-2 px-4">
              <NavLink
                to="/drinks"
                className="hover:text-red-600 hover:font-normal duration-200"
              >
                DRINKS
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
