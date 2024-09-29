import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bqonjyjb", userInfo);
      toast.success("Your message has been sent");
      reset(); // Reset the form after submission
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-lg container mx-auto px-4 md:px-20 my-16 pt-9"
    >
      <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
        Contact Me
      </h1>
      <p className="text-xl text-center mb-8 text-gray-600">
        Please fill out the form below to contact me.
      </p>
      <div className="flex flex-col items-center justify-center">
        <form
        action="https://getform.io/f/bqonjyjb"
        method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg w-full max-w-md px-8 py-8 rounded-xl"
        >
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Send Your Message
          </h1>
          
          {/* Name Input */}
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 mb-2 text-xl">Full Name</label>
            <input
              {...register("name", { required: "Full name is required" })}
              className={`shadow-lg rounded-lg border py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              } text-xl`}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 mb-2 text-xl">Email Address</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className={`shadow-lg rounded-lg border py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              } text-xl`}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message Input */}
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 mb-2 text-xl">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className={`shadow-lg rounded-lg border py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              } text-xl`}
              id="message"
              name="message"
              placeholder="Enter your query"
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 text-xl"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
