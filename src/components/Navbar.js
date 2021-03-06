
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about"className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Thabang Khoza
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#sovtech" className="mr-5 hover:text-white">
            Motivation
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
      </div>
    </header>
  );
}