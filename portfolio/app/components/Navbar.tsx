"use client";

import { HiMenuAlt3 } from "react-icons/hi";

const links = ["About", "Skills", "Services", "Projects", "Experience", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="text-xl font-black">
          <span className="text-blue-600">ALEX</span> DEV
        </a>

        <div className="hidden gap-8 text-sm font-semibold md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-600">
              {link}
            </a>
          ))}
        </div>

        <a className="hidden rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white md:block">
          Hire Me
        </a>

        <button className="text-3xl md:hidden">
          <HiMenuAlt3 />
        </button>
      </nav>
    </header>
  );
}