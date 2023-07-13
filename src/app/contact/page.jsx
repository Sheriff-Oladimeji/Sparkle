"use client";
import React from "react";

export const metadata = {
  title: "Contact us",
  description: "How can we help?",
};
const Contact = () => {
  
  return (
    <section className="page md:pt-4">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row text-black items-center">
        <div className="flex-1">
          <h3>GET IN TOUCH</h3>
          <h1>Do you have a project in your mind?</h1>
          <div>
            <p>
              <span></span>
              +2348147800112
            </p>

            <p>
              <span></span>
              hello@sparkle.com
            </p>
            <p>
              <span></span>
              50 Wall Street Suite, 44150 Ohio, United States
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
