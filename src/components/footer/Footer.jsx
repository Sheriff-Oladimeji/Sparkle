import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="w-[90%] mx-auto grid md:grid-cols-5 gap-4">
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
        <div>
          <p className="font-bold mb-2">Join Our Newsletter</p>
          <form action="" className="flex flex-col gap-2">
            <input
              type="email"
              name="email"
              className="bg-transparent text-white p-3 outline-none border border-white rounded-lg w-full"
            />
            <button
              type="submit"
              className="flex items-center w-full bg-white text-black p-2 rounded-lg justify-center hover:bg-transparent hover:text-white gap-2"
            >
              Subscribe
              <BsArrowRight size={25} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
