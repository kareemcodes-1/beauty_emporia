import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Make sure to use "react-router-dom" instead of "react-router"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full z-[1000] lg:mt-[1.5rem]  px-[1.5rem] lg:bg-transparent bg-[#fff] h-[5.5rem]">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="./logo2.png"
            alt="BeautyEmporia"
            className="lg:w-[6rem] lg:h-[6rem] w-[5rem] h-[6rem]  lg:object-cover object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="lg:flex hidden items-center gap-[2rem] text-[#aa8800]">
          <Link to={"/"} className="text-[#fff] hover:opacity-[.7] transition">Home</Link>
          <Link to={"/about"} className="text-[#fff] hover:opacity-[.7] transition">About</Link>
          <Link to={"/services"} className="text-[#fff] hover:opacity-[.7] transition">Services</Link>
          <Link to={"/works"} className="text-[#fff] hover:opacity-[.7] transition">Our Works</Link>
          <Link to={"/contact"} className="text-[#fff] hover:opacity-[.7] transition">Contact Us</Link>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X size={30} className="text-[#aa8800]" /> : <Menu size={30} className="text-[#aa8800]" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#aa8800] text-white shadow-md flex flex-col gap-4 p-6 lg:hidden">
            <Link to={"/"} className="text-white" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to={"/about"} className="text-white" onClick={() => setIsOpen(false)}>About</Link>
            <Link to={"/services"} className="text-white" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to={"/works"} className="text-white" onClick={() => setIsOpen(false)}>Our Works</Link>
            <Link to={"/contact"} className="text-white" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
