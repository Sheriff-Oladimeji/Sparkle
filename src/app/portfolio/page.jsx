"use client";
import React, { useState } from "react";
import data from "./data";
import Image from "next/image";
const Portfolio = () => {
  const [works, setWorks] = useState(data);

  const filterCategory = (selectedCategory) => {
    setWorks(data.filter((work) => work.category === selectedCategory));
  };
  return (
    <section className="page mb-12">
      <div className="w-[90%] mx-auto">
        <div></div>
        <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 my-8">
          {works.map((work) => (
            <div key={work.id} className="w-full relative h-[400px] shadow-lg hover:scale-105 duration-200">
              <Image
                src={work.imgUrl}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-[320px] object-cover rounded-t-lg"
              />
              <div className="py-4 flex flex-col justify-center px-8 w-full mx-auto space-y-2 ">
                <h3 className="font-bold text-red-600 font-lato text-xl">
                  {work.title}
                </h3>
                <p>{work.category}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Portfolio;
