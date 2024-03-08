import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";

// Reusable input component
const InputField = ({
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
  error,
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className=" text-violet-600 font-semibold capitalize mb-1 text-xl"
    >
      {name}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-2 focus:outline-violet-400 border ${
        error ? "border-red-500" : "border-gray-300"
      } rounded`}
      required
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

// Reusable contact info component
const ContactInfo = ({ icon, title, description, link }) => (
  <div className="w-60 flex justify-center items-center flex-col">
    <p className="flex gap-1 justify-center items-center text-xl font-semibold text-red-600 ">
      {icon}
      {link ? (
        <a href={link} className="text-red-500 hover:underline">
          {title}
        </a>
      ) : (
        title
      )}
    </p>
    <p className="text-violet-600 text-center py-2 text-lg">{description}</p>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear errors when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    }

    if (valid) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      // Clear form fields after submission
      setFormData({ name: "", email: "", message: "" });
    } else {
      // Update errors state with new error messages
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="container mx-auto  flex justify-between items-center h-screen">
        <div className="w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5747316001493!2d73.93961207393767!3d18.59320186695406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c40498b446f1%3A0x34121963019350ea!2sKarmabhumi%20developers!5e0!3m2!1sen!2sin!4v1709829880369!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg border border-gray-300"
          ></iframe>
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold text-violet-800 mb-8 ">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              error={errors.name}
            />
            <InputField
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              error={errors.email}
            />
            <div className="mb-4">
              <label
                htmlFor="message"
                className="w-full font-semibold mb-1 text-xl text-violet-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className={`w-full p-2 border focus:outline-violet-400 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded`}
                rows="5"
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-violet-700 rounded-lg text-white px-4 py-2 font-semibold hover:bg-white hover:text-violet-600 hover:border-violet-400 duration-300">
                Submit Details
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-around items-start w-full gap-4 ">
        <ContactInfo
          icon={<IoLocationSharp className="text-red-500" size={25} />}
          title="Our Office Address"
          description="Shankar Deval, Opp Dena Bnak, Rc Marg, Mehul Rd, Chembur"
        />
        <ContactInfo
          icon={<BsFillTelephoneFill className="text-red-500 " size={25} />}
          title="Call Us"
          description="1234567890"
          link="tel:1234567890"
        />
        <ContactInfo
          icon={<MdEmail className="text-red-500" size={25} />}
          title="General Enquiries"
          description="admin@edumate.com"
          link="mailto:admin@edumate.com"
        />
        <ContactInfo
          icon={<FaClock className="text-red-500" size={25} />}
          title="Our Timing"
          description="Mon-Sat : 09:00 AM - 07:00 PM"
        />
      </div>
    </>
  );
};

export default ContactPage;
