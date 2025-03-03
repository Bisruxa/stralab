import React from "react";
import Button from "./Button";
function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between w-100 bg-white shadow-lg h-20 center items-center m-9 rounded-lg sticky top-0 z-10 border">
      <div className="pl-3">STRATLAB</div>
      <div>
        <ul className="flex flex-row gap-x-10">
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-blue-500"
            >
              Service
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("learn")}
              className="hover:text-blue-500"
            >
              Why Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-blue-500"
            >
              Testimonial
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-blue-500"
            >
              FAQ
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-500"
            >
              About
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-x-5 pr-10">
        <Button
          className="pr-7 shadow-lg w-[85px] h-10 rounded-[20px] justify-center hover:bg-[rgb(59,145,85)] hover:text-white
          border-color border border-gray-400"
        >
          Login
        </Button>
        <Button
          className="shadow-lg w-[85px] h-10 rounded-[20px] justify-center hover:bg-[rgb(59,145,85)] hover:text-white
          border-color border border-gray-400 "
        >
          Sign Up
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
