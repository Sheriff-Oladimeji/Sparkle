import React from "react";
import   brand from "public/brand.png"
import   website from "public/website.png"
import design from "public/design.png"
import Image from "next/image";
 const services = [
   {
     id: 1,
     title: "Web Development",
     desc: "Whether it’s front-end development, CMS integration, or full backend support,we’ve got you covered. We’ll provide you with a fast and smart site that’s optimized for your visitors.",
     img: website,
   },
   {
     id: 2,
     title: "Branding & Design",
     desc: "We’ll help you tell your story and grow your business by developing a compelling visual brand that aligns to your vision and values, and elevates everything else that you do.",
     img: brand,
   },
   {
     id: 3,
     title: "Digital Product Design",
     desc: "Design is at the core of everything we do, because we believe that good design is good business. We’ll create a thoughtful, simple, and effective experience for your visitors.",
     img: design,
   },
 ];

const Service = () => {
    return (
      <div className="my-6 text-black">
        <h1 className=" text-3xl md:text-5xl font-lato font-bold mb-8">
          Our Services
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-2 border-black text-center py-4"
            >
              <div className="w-[90%] mx-auto flex flex-col items-center justify-center ">
                <Image
                  src={service.img}
                  alt={service.title}
                  className="h-[250px] object-contain "
                />
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Service;
