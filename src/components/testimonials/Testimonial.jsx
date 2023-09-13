"use client"
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import data from "./data";


const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section className="w-[90%] my-24 font-mont mx-auto  ">
      <h1 className="font-bold text-4xl md-text-6xl text-center cursive my-8">
        Testimonials
      </h1>
      <main
        className="grid md:grid-cols-3 sm:grid-cols-2 gap-8"
       
      >
        {data.map((card) => (
          <div
            key={card.id}
            className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full p-4 py-4 rounded-md"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-4 mb-3">
              <Image
                src={card.image}
                alt={card.name}
                width={40}
                height={40}
                className="w-10 h-10 object-cover rounded-full"
              />
              <h4 className="text-[24px]">{card.name}</h4>
            </div>
            <p className="text-[16px]">{card.testimony}</p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Testimonials;
