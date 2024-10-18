const About = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto pt-14">
        <h1 className="text-shadow-dark text-5xl font-extrabold sm:text-6xl text-center mb-14">
          About
        </h1>
        <div className="-mb-8 flex flex-col md:flex-row flex-shrink justify-between items-center px-10 gap-8">
          <div className="z-10">
            <img className="w-60 rounded-full" src="/5550613.jpg" alt="" />
          </div>
          <div className="z-10 flex flex-shrink items-center flex-col sm:flex-row  sm:gap-8 gap-4 pb-6">
            {/* <div className="bg-[url('/public/117-copy.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl"> */}
            <div className="flex items-center justify-center font-extrabold text-2xl sm:text-3xl  w-60 h-60 p-4 border shadow-xl rounded-3xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100 font-RobotoSlab">
              {" "}
              <div>
                <h1 className=" text-4xl sm:text-5xl text-shadow-dark ">
                  4.7+
                </h1>
                Years <br /> Experience
              </div>
            </div>
            {/* </div> */}
            {/* <div className=" bg-[url('/public/117-copy.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl"> */}
            <div className="z-10 flex items-center justify-center font-extrabold text-2xl sm:text-3xl w-60 h-60 p-4 border shadow-xl rounded-3xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100 font-RobotoSlab">
              {" "}
              <div>
                <h1 className="text-4xl sm:text-5xl text-shadow-dark">20+</h1>
                Project <br /> Completed
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* Description Section */}
        <div className="z-0 max-w-7xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-gray-700 mx-4 border rounded-3xl shadow-xl p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100">
            As a passionate and dedicated full stack developer with 3.5 years of
            experience, I specialize in creating dynamic, scalable, and
            user-friendly web applications. My expertise lies in leveraging
            cutting-edge technologies such as React, Node.js, Express.js, and
            MongoDB, along with Tailwind CSS for responsive design. I take pride
            in my ability to create seamless user interfaces and components that
            align perfectly with the intended aesthetic, ensuring responsive
            websites that adapt gracefully to any device. My skill set also
            includes proficient API integration, facilitating smooth data flow
            between the front end and back end. I am known for writing clean,
            well-structured code that enhances the overall maintainability of
            projects.
          </p>
        </div>
      </div>
      <hr className="mt-14 pb-14" />
    </div>
  );
};

export default About;
