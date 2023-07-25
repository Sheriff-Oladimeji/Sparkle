"use client";
import React, { useState } from "react";
import data from "./data";
import Image from "next/image";
import Link from "next/link";
const Portfolio = () => {
  const [works, setWorks] = useState(data);

  const filterCategory = (selectedCategory) => {
    setWorks(data.filter((work) => work.category === selectedCategory));
  };
  return (
    <section className="page mb-12">
      <div className="w-[90%] mx-auto">
        <div className="my-8">
          <h3 className="text-green text-xl">PORTFOLIO</h3>
          <h1 className="text-3xl md:text-4xl font-bold font-lato">Some of our best projects</h1>
        </div>
        <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 my-8">
          {works.map((work) => (
            <Link
              href={`/portfolio/${work.id}`}
              key={work.id}
              className="w-full relative h-[400px] duration-200"
            >
              <Image
                src={work.imgUrl}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-[320px] object-cover  hover:scale-105 "
              />
              <div className="py-6 flex flex-col justify-center  w-full mx-auto space-y-1 ">
                <h3 className="font-bold   text-2xl">{work.title}</h3>
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
