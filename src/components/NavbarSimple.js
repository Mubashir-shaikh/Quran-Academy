import { useState } from "react";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Benefits from "../pages/Benefits";
import ContactUs from "../pages/ContactUs";
import Pricing from "../pages/pricing"; // Fixed capitalization issue here
import Allcourses from "../components/Allcourses";
import Ourbenefits from "../components/ourbenefits"; // Fixed capitalization issue here

import {
  PaperAirplaneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function NavbarSimple() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="NavbarSimple sticky top-0 z-50 bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-1 text-gray-700 font-bold">
                <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                <span>E-Quran Online</span>
              </Link>
            </div>
            {/* Primary menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-gray-700">Home</Link>
              <Link to="/Benefits" className="text-gray-700">Benefits</Link>
              <Link to="/Courses" className="text-gray-700">Courses</Link>
              <Link to="/Pricing" className="text-gray-700">Pricing</Link>
              <Link to="/ContactUs" className="text-gray-700">Contact Us</Link>
            </div>
            {/* Free Trial button */}
            <div className="hidden lg:flex items-center">
              <button className="rounded-full border-2 bg-yellow-500 text-black py-2 px-6 hover:bg-gray-700 hover:text-gray-100">
                Free Trial
              </button>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? (
                  <XMarkIcon className="h-6 w-6 text-gray-700" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
          {/* Mobile navigation */}
          <div
            className={`fixed inset-0 z-40 bg-gray-100 flex flex-col items-center pt-20 transition-transform duration-300 ${
              toggleMenu ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <Link to="/" className="py-2 text-gray-700" onClick={() => setToggleMenu(false)}>Home</Link>
            <Link to="/Benefits" className="py-2 text-gray-700" onClick={() => setToggleMenu(false)}>Benefits</Link>
            <Link to="/Courses" className="py-2 text-gray-700" onClick={() => setToggleMenu(false)}>Courses</Link>
            <Link to="/Pricing" className="py-2 text-gray-700" onClick={() => setToggleMenu(false)}>Pricing</Link>
            <Link to="/ContactUs" className="py-2 text-gray-700" onClick={() => setToggleMenu(false)}>Contact Us</Link>
            <button className="mt-4 rounded-full border-2 bg-yellow-500 text-black py-2 px-6 hover:bg-gray-700 hover:text-gray-100">
              Free Trial
            </button>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Benefits" element={<Benefits />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Allcourses" element={<Allcourses />} />
        <Route path="/Ourbenefits" element={<Ourbenefits />} />
      </Routes>
    </>
  );
}

export default NavbarSimple;
