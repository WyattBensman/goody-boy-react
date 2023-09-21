import React from "react";

export function DropdownMenu() {
  return (
    <ul className="absolute text-black bg-white w-44 p-1 shadow-lg mt-2 rounded border text-center left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <li className="py-2 px-4">FOOD</li>
      <li className="py-2 px-4">DRINKS</li>
      <li className="py-2 px-4">HAPPY HOUR</li>
    </ul>
  );
}
