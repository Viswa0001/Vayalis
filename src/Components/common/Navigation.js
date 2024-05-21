import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        navbar
          ? " navbar bg-white flex justify-between items-center 2xl:px-[60px] sm:px-[20px] px-[5px] py-5 font-semibold sticky top-0 z-50 w-full transition-transform duration-1000"
          : "navbar active  flex justify-between items-center 2xl:px-[60px] sm:px-[20px] px-[5px] py-5 font-semibold w-full "
      }
    >
      <div className="flex items-center z-[999]">
        <NavLink to="/">
          <img src="/Assets/Home/Logo.svg" alt="img" className="w-[50px] " />
        </NavLink>
        <h1 className="lg:text-5xl md:text-2xl text-lg ">VAYALIS</h1>
      </div>
      <div className="flex justify-end md:space-x-7 space-x-2 text-sm ">
        <div className="lg:flex items-center lg:space-x-14 space-x-4 hidden">
          <NavLink
            to="/site-creation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-orange-500" : ""
            }
          >
            <p className="group  hover:text-orange-500">
              Site Creation
              <div class="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </p>
          </NavLink>
          <NavLink
            to="/Maintanence"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-orange-500" : ""
            }
          >
            <p className=" group hover:text-orange-500">
              Maintenance
              <div class="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </p>
          </NavLink>
          <NavLink
            to="/achievement"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-orange-500" : ""
            }
          >
            <p className="group hover:text-orange-500">
              Our Achievements
              <div class="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </p>
          </NavLink>
          <NavLink
            to="/webagency"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-orange-500" : ""
            }
          >
            <p className="group hover:text-orange-500">
              Our Web Agencies
              <div class="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </p>
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active text-orange-500" : ""
            }
          >
            <p className="group hover:text-orange-500">
              Blog
              <div class="bg-orange-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </p>
          </NavLink>
          <NavLink to="/startup" className="">
            <div
              typeof="button"
              className="border flex rounded-3xl md:py-3 py-1 md:px-5 px-2 md:text-md text-xs items-center gap-3 bg-[#FF7256] text-white"
            >
              <p>To Start Up</p>
              <FaGreaterThan />
            </div>
          </NavLink>
        </div>

        {/* <div onClick={handleNav} className="grid items-center  md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div> */}
        <div
          onClick={handleNav}
          className="cursor-pointer z-[99] lg:hidden text-2xl"
        >
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0   bg-gradient-to-b from-gray-500 to-red-300  lg:hidden block  z-50 overflow-hidden transition-transform duration-500 ease-in-out transform translate-y-0  h-full w-full bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-sm opacity-95 border border-gray-100"
            : "fixed top-0 left-0    lg:hidden block  border-r-gray-900   bg-gradient-to-b from-gray-700 to-red-300   z-50 overflow-hidden transition-transform duration-500 ease-in-out transform -translate-y-full  h-full w-full bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-sm opacity-95 border border-gray-100"
        }
      >
        <div className="">
          <div className="grid place-items-center  text-center space-y-5 text-3xl mt-28   text-white">
            <NavLink to="/site-creation" className=" " onClick={handleNav}>
              <p className="group  hover:text-orange-500">
                Site Creation
                <div class="bg-[#ff7256] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </p>
            </NavLink>
            <NavLink to="/Maintanence" className="" onClick={handleNav}>
              <p className="group  hover:text-[#ff7256]">
                Maintenance
                <div class="bg-[#ff7256] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </p>
            </NavLink>
            <NavLink to="/achievement" className="" onClick={handleNav}>
              <p className="group  hover:text-[#ff7256]">
                Our Achievements
                <div class="bg-[#ff7256] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </p>
            </NavLink>
            <NavLink to="/webagency" className="" onClick={handleNav}>
              <p className="group  hover:text-[#ff7256]">
                Our Web Agencies
                <div class="bg-[#ff7256] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </p>
            </NavLink>
            <NavLink to="/blog" className="" onClick={handleNav}>
              <p className="group  hover:text-[#ff7256]">
                Blog
                <div class="bg-[#ff7256] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </p>
            </NavLink>
            <NavLink to="/startup" className="" onClick={handleNav}>
              <div
                typeof="button"
                className="border flex rounded-3xl text-2xl px-2 py-2 items-center gap-3 bg-[#FF7256] text-white w-fit"
              >
                <p>To Start Up</p>
                <FaGreaterThan />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
