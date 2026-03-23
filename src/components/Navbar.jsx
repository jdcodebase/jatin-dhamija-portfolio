import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    // "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <>
      <nav className="flex justify-between items-center bg-black/10 backdrop-blur-md text-white py-4 px-8 fixed w-full z-50 border-b border-white/10 shadow-md shadow-cyan-700">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wider hover:italic">
          <a href="#home">JD</a>
        </h1>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button className="text-2xl" onClick={() => setMenu(!menu)}>
            {menu ? <IoMdClose /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="gap-10 hidden md:flex text-md tracking-wide">
          {navItems.map((item, index) => (
            <li key={index} className="desktop-navbar-list">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-40`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10 text-2xl font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="mobile-navbar-list ">
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
