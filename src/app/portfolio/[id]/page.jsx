import React from "react";
import data from "../data";
import { notFound } from "next/navigation";
import Image from "next/image";

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
      <main className="w-[90%] mx-auto my-8">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-6 items-center">
          <div className="flex-1 flex  gap-6 flex-col">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-lato">
              {selected.title}
            </h1>
            <p>{paragraphs[0]}</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid aspernatur quos dignissimos veritatis, harum repudiandae magnam! Id libero voluptate quos!</p>
          </div>
          <div className="flex-1">
            <Image
              alt={selected.title}
              src={selected.imgUrl}
              width={300}
              height={300}
              className="w-full h-[400px] object-cover md:object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-16 mb-10">
          <div className=" md:w-[70%]">
            <h3 className="text-green text-2xl font-bold font-lato mb-2">
              {selected.category}
            </h3>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 max-w-2xl">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex-1  md:w-[30%]">
            <h3 className="text-2xl font-bold font-lato text-green">Related Tags</h3>
            <div className="flex flex-col  gap-4 ">
              {selected.tags.map((item, index) => (
                <p key={index} className=" font-bold p-2  flex items-center">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default PortfolioItem;
