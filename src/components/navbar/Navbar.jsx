import Link from "next/link";
import React from "react";

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
  return (
    <nav className=" fixed top-0 left-0 z-50 w-full bg-dark shadow-md border-b border-[#232323]">
      {/* desktop nav */}
      <div className=" hidden w-4/5 mx-auto text-white md:flex justify-between items-center h-16">
        <h1 className="font-bold font-lato text-4xl">Sparkle</h1>

        <div className="flex gap-8">
          {links.map((link) => (
            <div key={link.id} className="flex">
              <Link href={link.url}>{link.title}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* mobile nav */}
      <div className="w-11/12 mx-auto text-white flex justify-between items-center md:hidden h-[70px]">
        <h1 className="font-bold font-lato text-3xl">Sparkle</h1>
      </div>
    </nav>
  );
};

export default Navbar;
