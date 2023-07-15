import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="w-[90%] mx-auto grid md:grid-cols-6 gap-4">
        <div>
          <p className="font-bold text-lg font-lato">Company</p>
          <ul className="text-[#bbb] flex flex-col gap-2">
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg font-lato">Services</p>
          <ul className="text-[#bbb] flex flex-col gap-2">
            <li>Branding</li>
            <li>Web development</li>
            <li>Digital marketing</li>
            <li>SEO</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg font-lato">Resources</p>
          <ul className="text-[#bbb] flex flex-col gap-2">
            <li>Blog</li>
            <li>Case Study</li>
            <li>Portfolio</li>
            <li>Team pages</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg font-lato">Support</p>
          <ul className="text-[#bbb] flex flex-col gap-2">
            <li>Contact</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="w-[100%] mx-auto  md:col-span-2">
          <p className="font-bold  mb-2">Subscribe to Our Newsletter</p>
          <form action="" className="flex  relative">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent text-white p-3 outline-none border border-white rounded-lg w-full focus:outline-none "
            />
            <button
              type="submit"
              name="button"
              className="bg-white text-black p-2 rounded-lg hover:bg-transparent hover:text-white gap-2 flex-1 focus:outline-none absolute right-0  top-0 h-full rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
