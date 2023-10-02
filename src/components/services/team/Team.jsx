"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const team = [
  {
    id: 1,
    name: "John Doe",
    imgUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    role: "Backend Developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    imgUrl:
      "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600",
    role: "Product Designer",
  },
  {
    id: 3,
    name: "Michael Johnson",
    imgUrl:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    role: "CEO",
  },
  {
    id: 4,
    name: "Emily Davis",
    imgUrl:
      "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
    role: "Project Manager",
  },
  {
    id: 5,
    name: "Robert Wilson",
    imgUrl:
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600",
    role: "Frontend Developer",
  },

  {
    id: 6,
    name: "David Taylor",
    imgUrl:
      "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=600",
    role: "Product Designer",
  },
];


const Team = () => {
    
   
  return (
    <section className="my-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 font-lato">
        Our Team of Experts
      </h1>

      <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
        {team.map((emp) => (
          <div key={emp.id} className="relative w-full h-[500px] text-white  shadow-md ">
            <Image
              src={emp.imgUrl}
              alt=""
              fill={true}
              className="object-cover h-full w-full "
            />
            <div className="absolute z-10 bottom-6 left-6 bg-white h-[70px] w-[200px] p-2 text-black rounded-md shadow-lg">
              <h3 className="font-bold text-2xl font-lato text-red-600">
                {emp.name}
              </h3>
              <p className="font-semibold">{emp.role}</p>
            </div>
          </div>
                  
        ))}
        </main>
     </section>
  );
};

export default Team;
