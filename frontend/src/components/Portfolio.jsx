import { useEffect, useState } from "react";
import { FaHtml5, FaReact, FaBootstrap, FaLink } from "react-icons/fa"; // Import more icons as needed

const portfolioItems = [
  {
    image: "/Screenshot 2024-10-14 080814.png", // Replace with actual image URLs
    title: "CricTracker",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
    technologies: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-[#E34F26]" size={16} />,
      },
      {
        name: "ReactJS",
        icon: <FaReact className="text-[#61DBFB]" size={16} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-[#563d7c]" size={16} />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-[#E34F26]" size={16} />,
      },
      {
        name: "ReactJS",
        icon: <FaReact className="text-[#61DBFB]" size={16} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-[#563d7c]" size={16} />,
      },
    ],
    link: "https://www.crictracker.com", // Replace with actual link
  },
  {
    image: "/Screenshot 2024-10-14 080933.png",
    title: "Project Two",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
    technologies: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-[#E34F26]" size={16} />,
      },
      {
        name: "ReactJS",
        icon: <FaReact className="text-[#61DBFB]" size={16} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-[#563d7c]" size={16} />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-[#E34F26]" size={16} />,
      },
      {
        name: "ReactJS",
        icon: <FaReact className="text-[#61DBFB]" size={16} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-[#563d7c]" size={16} />,
      },
    ],
    link: "#", // Replace with actual link
  },
  {
    image: "/Screenshot 2024-10-14 081322.png",
    title: "Project Three",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
    technologies: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-[#E34F26]" size={16} />,
      },
      {
        name: "ReactJS",
        icon: <FaReact className="text-[#61DBFB]" size={16} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-[#563d7c]" size={16} />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-[#E34F26]" size={16} />,
      },
      {
        name: "ReactJS",
        icon: <FaReact className="text-[#61DBFB]" size={16} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-[#563d7c]" size={16} />,
      },
    ],
    link: "#", // Replace with actual link
  },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 3 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="sm:max-w-6xl px-4 mx-auto overflow-hidden">
        <h1 className="text-shadow-dark text-5xl font-extrabold sm:text-6xl text-center mb-14">
          Portfolio
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-start gap-6  rounded-lg bg-[#e4e0dd2c] p-4 shadow-lg ">
          {/* Image */}
          <div className="md:w-1/2 border rounded-lg">
            <img
              src={portfolioItems[activeIndex].image}
              alt={portfolioItems[activeIndex].title}
              className="w-fit h-80 object-cover rounded-lg"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col items-start justify-start md:w-1/2">
            <h1 className="text-3xl font-bold mb-2 ">
              {portfolioItems[activeIndex].title}
            </h1>
            <p className="text-md text-start font-normal mb-2 ">
              {portfolioItems[activeIndex].description}
            </p>

            {/* Technologies */}
            <div className="flex item-center justify-cemter flex-wrap gap-4 my-4">
              {portfolioItems[activeIndex].technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center px-2.5 py-1.5 border rounded-full bg-black text-white transition-transform duration-500 transform hover:scale-110">
                  {tech.icon}
                  <span className="text-sm ml-2">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Go To Project Button */}
            <div className="text-center flex justify-center items-center transition-transform duration-500 transform hover:scale-105 ">
              <a
                href={portfolioItems[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit gap-2 justify-center items-center border rounded-lg bg-black text-white 
                   px-3 py-2  
                  font-semibold transition">
                {" "}
                <FaLink />
                Go To {portfolioItems[activeIndex].title}
              </a>
            </div>
          </div>
        </div>

        {/* Manual navigation dots */}
        <div className="flex justify-center mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                activeIndex === index ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}></button>
          ))}
        </div>
      </div>
      <hr className="mt-14 pb-14" />
    </div>
  );
};

export default Portfolio;
