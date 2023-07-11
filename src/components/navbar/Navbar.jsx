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
    <nav>
      <div className="w-[80%] mx-auto text-white flex justify-between items-center">
        <h1 className="font-bold font-lato text-4xl">Sparkle</h1>

        {links.map((link) => (
          <div key={link.id} className="flex items-center gap-0">
            <Link href={link.url}>{link.title}</Link>
          </div>
        ))}
      </div>
      <div className="w-[90%] mx-auto text-white flex justify-between items-center">
              <h1 className="font-bold font-lato text-4xl">Sparkle</h1>
              
      </div>
    </nav>
  );
};

export default Navbar;
