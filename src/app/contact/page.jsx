'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export const metadata = {
  title: "Contact us",
  description: "How can we help?",
};
const Contact = () => {
  const [error, setError] = useState("")
   const router = useRouter();
  const handleSubmit = async(e) => {
    e.preventDefault()
const name = e.target[0].value
const email = e.target[1].value
const subject = e.target[2].value
const message = e.target[3].value
    if (!name || !email || !subject || !message) {
      return setError("All fields are  required")
    }
    else {
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
          message
        }),
      });
      res.status === 201 &&
        router.push("/contact/success?success=Information has been saved");
    } catch (err) {
      throw new Error(err)
    }
    }

  }
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
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
          <input type="text" name="name" className="input" placeholder="Name" />

          <input
            type="text"
            name="email"
            className="input"
            placeholder="Email"
          />

          <input
            type="text"
            name="subject"
            className="input"
            placeholder="Subject"
          />

          <textarea
            name="textarea"
            className="input"
            placeholder="Message"
          ></textarea>
          {error && error}

          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
