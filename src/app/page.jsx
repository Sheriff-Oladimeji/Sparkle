/* eslint-disable react/no-unescaped-entities */
import Faq from "@/components/faq/Faq";
import Service from "@/components/services/Service";
import Team from "@/components/services/team/Team";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import google from "public/google.png";
import github from "public/github.png";
import twitch from "public/twitch.png";
import reddit from "public/reddit.png";
import twitter from "public/twitter.png";
import figma from "public/figma.png";
import pinterest from "public/pinterest.png";
import meta from "public/meta.png";
import linkedin from "public/linkedin.png";
import Testimonial from "@/components/testimonials/Testimonial";
import Testimonials from "@/components/testimonials/Testimonial";
export const metadata = {
  title: "Sparkle",
  description: "Empower your brand with our creative expertise",
};

const page = () => {
  return (
    <section className="page">
      <header className="flex flex-col-reverse md:flex-row items-center  md:gap-[100px] w-[90%] mx-auto">
        <div className="flex flex-col gap-3 mx-auto md:flex-1 w-full md:mt-0 text-center md:text-left md:items-start md:justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold w-full cursor-pointer">
            Unleash Your Creative Potential with our Expertise
          </h1>

          <p className="font-lato text-lg">
            Step into a world of limitless possibilities as we unleash the power
            of creativity to elevate your brand and captivate your audience.
          </p>
          <Link href="/portfolio" alt="">
            <button className="border-none bg-green text-white font-bold p-4 rounded-lg flex items-center gap-4 mt-4 mx-auto">
              See Our Works <BsArrowRight size={25} />
            </button>
          </Link>
        </div>

        <div className="block flex-1 ">
          <Image
            src="/hero.png"
            alt="hero"
            width={500}
            height={500}
            className="img"
          />
        </div>
      </header>

      <main className="my-16">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl  font-bold font-lato max-w-md leading-10">
              Trusted by 100+ companies around the world
            </h1>

            <p className="max-w-md mt-4 leading-8">
              We have had the pleasure of working with leading technology
              companies, where we've helped shape their brand identities and
              create captivating digital experiences that resonate with their
              target audiences.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-8 text-center">
            <Image src={google} alt="" className="icons" />
            <Image src={meta} alt="" className="icons" />
            <Image src={linkedin} alt="" className="icons" />
            <Image src={reddit} alt="" className="icons" />
            <Image src={twitter} alt="" className="icons" />
            <Image src={figma} alt="" className="icons" />
            <Image src={twitch} alt="" className="icons" />
            <Image src={github} alt="" className="icons" />
            <Image src={pinterest} alt="" className="icons" />
          </div>
        </div>
      </main>

      <Service />
      <Testimonials />
      <Faq />
    </section>
  );
};

export default page;
