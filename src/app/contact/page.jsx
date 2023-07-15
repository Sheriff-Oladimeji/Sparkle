"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BsFillTelephoneInboundFill } from "react-icons/bs"
import {MdMarkEmailUnread} from "react-icons/md"

const Contact = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;
    if (!name || !email || !subject || !message) {
      return setError(!error);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      res.status === 201 &&
        router.push("/contact/success?success=Information has been saved");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="page md:pt-4 mb-12">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row text-black items-center">
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-xl text-green font-bold">GET IN TOUCH</h3>
          <h1 className="text-3xl md:text-5xl font-lato font-bold">
            Do you have a project
            <br className="hidden md:block" /> in your mind?
          </h1>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-3 text-lg">
              <BsFillTelephoneInboundFill />
              +2348147800112
            </p>

            <p className="flex items-center gap-3 text-lg">
              <MdMarkEmailUnread />
              hello@sparkle.com
            </p>
           
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:flex-1  gap-4 mt-6 "
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />

            <input
              type="text"
              name="email"
              className="input"
              placeholder="Email"
            />
          </div>

          <input
            type="text"
            name="subject"
            className="input"
            placeholder="Subject"
          />

          <textarea
            name="message"
            className="input h-32"
            placeholder="Message"
          ></textarea>
          {error && (
            <p className="text-red-700 font-semibold">
              All input must be filled
            </p>
          )}

          <button className="text-white bg-green border-none font-bold p-[10px] rounded-md w-32 text-center">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
