import { useState, useEffect } from "react";

const testimonials = [
  {
    message:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    name: "Micheal Gough",
    title: "CEO at Google",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    message:
      "Tailwind CSS is a game-changer in modern web development. It offers everything I need to quickly build responsive, scalable interfaces.",
    name: "Sarah Johnson",
    title: "Product Manager at Amazon",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    message:
      "The level of customization and flexibility with Tailwind is unmatched. It has completely transformed the way I build and design web apps.",
    name: "Chris Lee",
    title: "CTO at Facebook",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    message:
      "Working with Tailwind has been an incredible experience. It has accelerated our development process and allowed us to focus on building great products.",
    name: "Emma Watson",
    title: "Lead Developer at Microsoft",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 3 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="sm:max-w-6xl px-4 mx-auto text-center ">
        <h1 className="text-shadow-dark text-5xl font-extrabold sm:text-6xl text-center mb-14">
          Testimonials
        </h1>
        <figure className="max-w-screen-md mx-auto transition-opacity duration-1000 ease-in-out">
          <div>
            <p className="h-32 md:h-20 text-xl font-medium text-black">
              {testimonials[activeIndex].message}
            </p>
          </div>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src={testimonials[activeIndex].img}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-black">
                {testimonials[activeIndex].name}
              </div>
              <div className="pl-3 text-sm font-light text-black">
                {testimonials[activeIndex].title}
              </div>
            </div>
          </figcaption>
        </figure>

        {/* Manual navigation dots */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                activeIndex === index ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}></button>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-16 h-56 sm:h-max">
        <img src="/avatar-macbook.3a5e5bd3.svg" alt="" />
      </div>
      <hr className="pb-14" />
    </div>
  );
};

export default Testimonials;
