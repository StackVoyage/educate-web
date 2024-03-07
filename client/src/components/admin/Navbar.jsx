import React, { useState, useEffect } from "react";
import logo from "../../assets/edu-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Marquee2 from "../Marquee";
import UserNavbar from "../UserNavbar";

export const NavLinkItemDesktop = ({ to, children, onClick }) => (
  <li className="text-white hover:scale-105 duration-300" onClick={onClick}>
    <Link to={to}>{children}</Link>
  </li>
);

export const NavLinkItemMobile = ({ to, children, onClick }) => (
  <li
    className="text-violet-400 text-3xl hover:scale-105 duration-300 mb-6 md:hidden"
    onClick={onClick}
  >
    <Link to={to}>{children}</Link>
  </li>
);

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar bg-gradient-to-r from-white to-violet-400 w-full h-20 flex justify-between items-center relative ${
          isNavbarFixed ? "fixed-navbar" : ""
        }`}
      >
        <div className="">
          <Link to="/" className="flex ml-4">
            <h1 className="text-violet-500 font-bold text-5xl">Edumate</h1>
            <img src={logo} alt="logo" className="-ml-4" />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-10 font-semibold mr-4">
            <NavLinkItemDesktop to="/">Home</NavLinkItemDesktop>
            <NavLinkItemDesktop to="/about">About</NavLinkItemDesktop>
            <NavLinkItemDesktop to="/enquiry">Enquiry</NavLinkItemDesktop>
            <NavLinkItemDesktop to="/contact">Contact</NavLinkItemDesktop>
            <NavLinkItemDesktop to="/blogs">Blogs</NavLinkItemDesktop>
            <NavLinkItemDesktop to="/sign-in">Login</NavLinkItemDesktop>
          </ul>
          <div
            onClick={toggleNav}
            className="cursor-pointer text-white md:hidden pr-4 z-10"
          >
            {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <ul
            className={`md:hidden flex flex-col justify-center items-center absolute left-0 w-full top-20 mt-6 
                        ${navOpen ? "navbar-open" : "navbar-collapse"}`}
          >
            <NavLinkItemMobile to="/">Home</NavLinkItemMobile>
            <NavLinkItemMobile to="/about">About</NavLinkItemMobile>
            <NavLinkItemMobile to="/enquiry">Enquiry</NavLinkItemMobile>
            <NavLinkItemMobile to="/contact">Contact</NavLinkItemMobile>
            <NavLinkItemMobile to="/blogs">Blogs</NavLinkItemMobile>
            <NavLinkItemMobile to="/sign-in">Login</NavLinkItemMobile>
          </ul>
        </div>
      </div>
      <div
        className={`marquee-wrapper ${
          navOpen && isMobile ? "marquee-open" : ""
        }`}
      >
        {/* <Marquee2 /> */}
      </div>
    </>
  );
};

export default Navbar;
