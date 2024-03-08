import React, { useState } from "react";
import demoImg from "../assets/demo.jpg";
import { useNavigate } from "react-router-dom";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    kidName: "",
    course: "",
  });

  const [errors, setErrors] = useState({
    parentName: "",
    email: "",
    phone: "",
    kidName: "",
    course: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation logic
    let error = "";
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email address";
    } else if (name === "phone" && !/^\+\d{2,3}-\d{10}$/.test(value)) {
      error = "Invalid phone number";
    } else if (value.trim() === "") {
      error = "This field is required";
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields on form submission
    let formErrors = {};
    for (const key in formData) {
      if (formData[key].trim() === "") {
        formErrors[key] = "This field is required";
      }
    }
    setErrors(formErrors);

    // If there are empty fields, stop form submission
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    // Form submission logic here
    console.log("Form submitted with data:", formData);
    // You can send the form data to your backend or handle it as needed

    // Navigate to the home page
    navigate("/");
  };

  return (
    <div className="w-full h-full mb-6 ">
      <div className="flex justify-center items-center flex-col py-8 ">
        <h1 className="text-3xl text-violet-600 font-semibold text-center">
          BOOK A FREE TRIAL CLASS WITH US!
        </h1>
        <p className="max-w-2xl text-center leading-8 text-lg text-violet-400 py-4">
          Everything begins with a first step. Book a free class now and begin
          the journey of learn to read. Our courses will make your child an avid
          reader at an early age.
        </p>
      </div>
      <div className="flex h-full gap-2 px-8">
        <div className="w-1/2 bg-violet-300 shadow-lg rounded-lg py-2">
          <div>
            <h3 className="text-xl text-center text-violet-900 font-semibold pt-4">
              Book a Free Demo
            </h3>
            <p className="text-lg text-center py-4 text-violet-800">
              Enter details to book demo here
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col px-10 py-4 space-y-6">
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter Parent's Name"
                className="py-2 px-4 rounded-md border focus:outline-violet-600 w-[85%]"
              />
              {errors.parentName && (
                <span className="text-red-500 flex ">{errors.parentName}</span>
              )}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email id"
                className="py-2 px-4 rounded-md border focus:outline-violet-600 w-[85%]"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone No. with code (Eg +91-XXXXXXXXXX)"
                className="py-2 px-4 rounded-md border focus:outline-violet-600 w-[85%]"
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone}</span>
              )}

              <input
                type="text"
                name="kidName"
                value={formData.kidName}
                onChange={handleChange}
                placeholder="Enter Kid's Name"
                className="py-2 px-4 rounded-md border focus:outline-violet-600 w-[85%]"
              />
              {errors.kidName && (
                <span className="text-red-500">{errors.kidName}</span>
              )}

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="py-2 px-4 rounded-md border focus:outline-violet-600 w-[85%] text-violet-600"
              >
                <option value="">Select Course</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
              </select>
              {errors.course && (
                <span className="text-red-500">{errors.course}</span>
              )}

              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Query (if any)"
                className="py-2 px-4 rounded-md border focus:outline-violet-600 w-[85%]"
              ></textarea>
              {errors.query && (
                <span className="text-red-500">{errors.query}</span>
              )}

              <div className="flex justify-center items-center ">
                <button className="bg-violet-700 rounded-lg text-white px-4 py-2 font-semibold hover:bg-white hover:text-violet-600 hover:border-violet-400 duration-300 ">
                  Submit Details
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-1/2 flex justify-center items-center ">
          <img
            src={demoImg}
            alt=""
            className="rounded-full size-10/12 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
