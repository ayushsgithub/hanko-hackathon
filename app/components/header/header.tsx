import React from "react";
import { LogoutBtn } from "../hanko/Logout";
import HankoProfile from "../hanko/HankoProfile";
import Link from "next/link";

const header = () => {
  return (
    <header className="p-4 max-w-7xl mx-auto px-10 border-gray-700 border bg-[#38416138] backdrop:brightness-200 backdrop:opacity-5 backdrop:backdrop-blur-3xl shadow-lg rounded-lg">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <div>
          <p
            className="text-4xl font-serif text-white cursor-pointer"
          >
            Image Gallery
          </p>
        </div>
        <div className=" flex flex-row items-center w-full justify-evenly md:w-fit">
          <Link href={"/home"} className="cursor-pointer text-white hover:text-yellow-300 transition duration-300 mb-2 md:mb-0 md:ml-6">
            Home
          </Link>
          <Link href={"../dashboard"} className="cursor-pointer text-white hover:text-yellow-300 transition duration-300 mb-2 md:mb-0 md:ml-6">
            Dashboard
          </Link>
          <p className="cursor-pointer text-red-600 hover:text-red-500 transition duration-300 mb-2 md:mb-0 md:ml-6">
          <LogoutBtn />
          </p>

   
        </div>
      </div>
    </header>
  );
};

export default header;
