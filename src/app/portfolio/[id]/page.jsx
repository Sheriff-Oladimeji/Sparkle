"use client";
import React from "react";
import data from "../data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { select } from "@material-tailwind/react";

const getData = (portfolio) => {
  const selected = data.find((item) => item.id === parseInt(portfolio));
  if (selected) {
    return selected;
  }
  return notFound();
};

const PortfolioItem = ({ params }) => {
  const selected = getData(params.id);
  const paragraphs = selected.description.split("\n");
  return (
    <section className="page ">
      <main className="flex flex-col gap-10 md:gap-24 md:flex-row justify-between w-[90%] mx-auto my-8 items-center">
        <div className="relative w-full  h-[400px] sm:h-[500px] object-cover md:flex-1">
          <Image src={selected.imgUrl} alt={selected.title} fill={true} />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-green text-xl font-lato">{selected.category}</h3>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-lato mb-4">
            {selected.title}
          </h1>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="max-w-2xl">
              {paragraph}
            </p>
          ))}

          <div className="flex items-center gap-2">
            <h4 className="text-xl font-bold">Date:</h4>
            <p>{selected.date}</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default PortfolioItem;
