/* eslint-disable react/no-unescaped-entities */
import Service from "@/components/services/Service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
export const metadata = {
  title: "Sparkle",
  description: "Empower your brand with our creative expertise",
};

const page = () => {
  return (
    <section className="pt-24 md:pt-0 font-mont">
      <div className="w-[90%] mx-auto">
        <header className="flex flex-col md:flex-row md:items-center  md:gap-[100px]">
          <div className="flex flex-col gap-3 mx-auto  md:flex-1">
            <h1 className="text-4xl md:text-5xl font-bold  header  w-full">
              Unleash Your Creative Potential with our Expertise
            </h1>
            
              <p className="font-lato text-lg">
                Step into a world of limitless possibilities as we unleash the
                power of creativity to elevate your brand and captivate your
                audience.
              </p>
              <Link href="/portfolio" alt="">
                <button className="border-none bg-green text-white font-bold p-4 rounded-lg flex items-center gap-4 mt-4">
                  See Our Works <BsArrowRight size={25} />
                </button>
              </Link>
          
          </div>
          <div className="hidden md:block flex-1 ">
            <Image
              src="/hero.png"
              alt="hero"
              width={500}
              height={500}
              className="img"
            />
          </div>
        </header>

        <Service/>
      </div>
    </section>
  );
};

export default page;
