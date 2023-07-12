"use client";
import Link from "next/link";
import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md md:shadow-none md:relative">
      {/* desktop nav */}
      <div className="hidden w-[90%] mx-auto text-black md:flex justify-between items-center h-16">
        <h1 className="font-bold  text-4xl">Sparkle</h1>
        <div className="flex gap-8">
          {links.map((link) => (
            <div key={link.id} className="flex font-bold">
              <Link href={link.url} className="text-[16px] hover:text-green">
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* mobile nav */}
      <div className="w-11/12 mx-auto flex justify-between items-center md:hidden h-[70px]">
        <h1 className="font-bold  text-3xl">Sparkle</h1>
        <button
          onClick={handleNav}
          className="outline-none border-none background-none"
        >
          {nav ? <VscChromeClose size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </button>
      </div>

      <div
        className={`${
          nav ? "h-screen" : "h-0"
        } overflow-hidden transition-all duration-500 md:hidden`}
      >
        <div className="flex flex-col gap-8 z-50 pt-12 px-8">
          {links.map((link) => (
            <Link
              href={link.url}
              className="text-[16px] hover:text-green font-bold hover:pl-3 duration-200"
              key={link.id}
              onClick={handleNav}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center px-8 gap-6 mt-16">
          <Link href="#">
            <FaFacebookF size={25} className="hover:text-green" />
          </Link>
          <Link href="#">
            <FaTwitter size={25} className="hover:text-green" />
          </Link>
          <Link href="#">
            <FaGithub size={25} className="hover:text-green" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
