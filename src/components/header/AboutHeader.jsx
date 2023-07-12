import firstImg from "/public/about.jpg"
import secondImg from "/public/about-2.jpg"
import thirdImg from "/public/about-3.jpg"
import Image from "next/image";

const about = [
  {
    id: 1,
    title: "One of the fastest growing agency",
    desc: "At Sparkle, we harness the power of creativity to design stunning visuals, develop cutting-edge websites and applications, and build strong brand identities. Our team of innovative thinkers and talented designers collaborate seamlessly to bring your vision to life. From captivating website designs to immersive user experiences, we specialize in creating engaging digital solutions that leave a lasting impact. With a strategic approach to branding and marketing, we help businesses establish a strong presence, connect with their target audience, and achieve their goals.",
    image: firstImg,
    cap: "About Us",
  },
  {
    id: 2,
    title: "Building Software for World Changers",
    desc: "We are a dynamic and passionate creative agency, driven by innovation and excellence. With a team of talented individuals, we bring fresh perspectives and imaginative solutions to every project. From captivating storytelling to meticulous craftsmanship, we collaborate closely with clients to deliver exceptional results. Welcome to our agency, where creativity knows no bounds.",
    image: secondImg,
    cap: "Who We Are",
  },
  {
    id: 3,
    title: "New Standards in a Competitive Landscape",
    desc: "At our agency, we stand out from the competition by combining creativity with a strategic mindset. We don't just create visually stunning designs; we also ensure that every element serves a purpose and aligns with your business objectives. Our focus on delivering tangible results sets us apart, as we constantly strive to exceed expectations and drive measurable growth. With our deep industry knowledge, innovative thinking, and a client-centric approach, we are your trusted partner in achieving remarkable success in a highly competitive landscape.",
    image:thirdImg,
    cap: "Why Choose Us",
  },
];



const AboutHeader = () => {
  return (
    <header>
      <div>
        {about.map((item) => (
          <div key={item.id} className="flex items-center flex-col-reverse md:flex-row ">
            <div className="flex-1">
                    <h4 className="text-xl font-semibold">{item.cap}</h4>
                    <h1 className="font-bold text-3xl sm:text-4xl font-lato">{item.title}</h1>
                    <p>{item.desc}</p>
                </div>
                <div className="flex-1">
                    <Image src={item.image} alt={item.cap} />
                </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default AboutHeader;
