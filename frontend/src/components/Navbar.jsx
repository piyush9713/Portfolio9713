import { useState } from "react";
import { FiX } from "react-icons/fi"; // Import hamburger and close icons
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        id="nav"
        className="fixed z-50 flex items-center justify-between w-[95%]  md:w-[52%] lg:w-[36%] h-14 pr-4 px-2 top-4 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-md">
        {/* Brand Button */}
        <button className="px-5 py-2 rounded-lg bg-[#FFCD6D] font-bold">
          Ankit
        </button>
        <div
          id="center-nav"
          className="hidden md:flex gap-10 text-black text-md mx-auto">
          <a href="#about" className="relative group">
            <span>About</span>
            <span className="absolute left-0 right-0 bottom-0   h-0.5 rounded-full bg-gray-800 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a href="#" className="relative group">
            <span>Portfolio</span>
            <span className="absolute left-0 right-0 bottom-0  h-0.5 rounded-full bg-gray-800 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a href="#" className="relative group">
            <span>Contact me</span>
            <span className="absolute left-0 right-0 bottom-0  h-0.5 rounded-full bg-gray-800 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative flex items-center justify-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX size={24} className="text-black" /> // Close icon
            ) : (
              <CgMenuRightAlt size={24} className="text-black" /> // Hamburger icon
            )}
          </button>

          {/* Mobile Menu (Dropdown) */}
          {isOpen && (
            <div
              id="mobile-nav"
              className="absolute top-11 -right-4  z-50 flex flex-col p-2 w-max text-lg
              bg-white  backdrop-blur-lg rounded-xl shadow-md">
              <a href="#" className="hover:bg-gray-200 px-3 py-2 rounded-md">
                About
              </a>
              <a href="#" className="hover:bg-gray-200 px-3 py-2 rounded-md">
                Portfolio
              </a>
              <a href="#" className="hover:bg-gray-200 px-3 py-2 rounded-md">
                Contact me
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
