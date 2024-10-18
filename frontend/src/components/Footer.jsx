const Footer = () => {
  return (
    <div className="flex items-center justify-center pb-8">
      <div
        id="nav"
        className=" z-50 flex items-center justify-between w-[95%]  h-14 px-2 bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-md">
        <button className="px-5 py-2 rounded-lg bg-[#FFCD6D] font-bold">
          Ankit
        </button>
        <p className="text-black text-sm sm:text-md ">
          © 2023 Ankit. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
