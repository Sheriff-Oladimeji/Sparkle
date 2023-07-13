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
  const deviceType =
    typeof window !== "undefined" && window.innerWidth > 1024
      ? "desktop"
      : "mobile";
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
   
  };
   
  return (
    <section>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Our Team
      </h1>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType === "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="rounded-md"
      >
        {team.map((emp) => (
          <div key={emp.id} className="relative w-full h-[400px] text-white ">
            <Image
              src={emp.imgUrl}
              alt=""
              fill={true}
              className="object-cover h-full w-full "
            />
            <div className="absolute z-10 bottom-6 left-6 bg-white h-[70px] w-[200px] p-2 text-black rounded-sm shadow-lg">
              <h3 className="font-bold text-2xl font-lato text-red-600">
                {emp.name}
              </h3>
              <p className="font-semibold">{emp.role}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Team;
