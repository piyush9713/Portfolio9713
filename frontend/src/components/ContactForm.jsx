import { useForm } from "react-hook-form";
import axios from "axios";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";
import { TbSend2 } from "react-icons/tb";
import { toast } from "sonner";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/send", data);
      toast.success("Message sent successfully.");
      reset();
    } catch (error) {
      alert("Failed to send message.");
      toast.error("Failed to send message.");
      console.error(error);
    }
  };

  return (
    <div className="mx-4">
      <div className="bg-[#0C0C0C] p-6 sm:p-8 sm:pt-12 mb-8 sm:mb-14 pt-8 rounded-[40px] shadow-lg max-w-6xl mx-auto relative">
        <h1 className="text-white text-shadow-dark text text-5xl font-extrabold sm:text-7xl text-center mb-10 sm:mb-14">
          Contact Me
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name Field */}
            <div className="relative">
              <AiOutlineUser
                className="absolute top-4 left-4 "
                size={20}
                color="white"
              />
              <input
                type="text"
                placeholder="Full Name *"
                {...register("name", { required: "Full Name is required" })}
                className={`w-full p-4 pl-12 rounded-full bg-[#181818] text-white ${
                  errors.name ? "border-red-500" : "border-gray-700"
                } focus:outline-none focus:border-yellow-500`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm flex items-start pl-4 pt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <AiOutlineMail
                className="absolute top-4 left-4 "
                size={20}
                color="white"
              />
              <input
                type="email"
                placeholder="Email *"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                className={`w-full p-4 pl-12 rounded-full bg-[#181818] text-white ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } focus:outline-none focus:border-yellow-500`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm flex items-start pl-4 pt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Mobile No Field */}
            <div className="relative">
              <AiOutlinePhone
                className="absolute top-4 left-4"
                size={20}
                color="white"
              />
              <input
                type="tel"
                placeholder="Mobile No. *"
                {...register("mobile", {
                  required: "Mobile number is required",
                  minLength: 10,
                })}
                className={`w-full p-4 pl-12 rounded-full bg-[#181818] text-white ${
                  errors.mobile ? "border-red-500" : "border-gray-700"
                } focus:outline-none focus:border-yellow-500`}
              />
              {errors.mobile && (
                <span className="text-red-500 text-sm flex items-start pl-4 pt-1">
                  {errors.mobile.message}
                </span>
              )}
            </div>

            {/* Subject Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="Subject *"
                {...register("subject", { required: "Subject is required" })}
                className={`w-full p-4 rounded-full bg-[#181818] text-white ${
                  errors.subject ? "border-red-500" : "border-gray-700"
                } focus:outline-none focus:border-yellow-500`}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm flex items-start pl-4 pt-1">
                  {errors.subject.message}
                </span>
              )}
            </div>
          </div>

          {/* Message Field (Full Width) */}
          <div className="relative">
            <AiOutlineMessage
              className="absolute top-4 left-4"
              size={20}
              color="white"
            />
            <textarea
              placeholder="Message *"
              {...register("message", { required: "Message is required" })}
              className={`w-full p-4 pl-12 rounded-3xl bg-[#181818] text-white h-32 ${
                errors.message ? "border-red-500" : "border-gray-700"
              } focus:outline-none focus:border-yellow-500`}></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm flex items-start pl-4 pt-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="w-32 p-3 flex items-center justify-center gap-2  bg-yellow-500 rounded-full text-black font-bold text-lg hover:bg-yellow-600 transition-colors">
              Send <TbSend2 size={25} />
            </button>
          </div>
        </form>
      </div>
      <div className="absolute -bottom-28 right-0  lg:right-20  hidden sm:block z-10">
        <img
          src="/memoji-with-imac.b6578a46.svg"
          alt=""
          className="h-[360px]"
        />
      </div>
    </div>
  );
};

export default ContactForm;
