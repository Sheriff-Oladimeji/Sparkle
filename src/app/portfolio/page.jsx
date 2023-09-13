"use client";
import React, { useState, useEffect } from "react";
import data from "./data";
import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css"; 

const Portfolio = () => {
  const [works, setWorks] = useState(data);
   useEffect(() => {
     AOS.init({ duration: 1000 }); 
   }, []);


  const filterCategory = (selectedCategory) => {
    setWorks(data.filter((work) => work.category === selectedCategory));
  };
  return (
    <section className="page mb-12">
      <div className="w-[90%] mx-auto">
        <div className="my-8">
          <h3 className="text-green text-xl">PORTFOLIO</h3>
          <h1 className="text-3xl md:text-4xl font-bold font-lato">
            Some of our best projects
          </h1>
        </div>
        <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 my-8">
          {works.map((work) => (
            <Link
              href={`/portfolio/${work.id}`}
              key={work.id}
              className="w-full relative  duration-200  rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] "
              data-aos="fade-up"
            >
              <Image
                src={work.imgUrl}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-[320px] object-cover rounded-t-md"
              />
              <div className="py-6 flex flex-col justify-center  w-full mx-auto space-y-1 px-2   ">
                <h3 className="font-bold   text-2xl">{work.title} </h3>
                <p className="text-lg font-lato">{work.category}</p>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Portfolio;
