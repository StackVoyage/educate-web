import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormField = ({ label, name, type = "text", value, onChange, error }) => (
  <div>
    <label
      htmlFor={name}
      className="block font-semibold py-2 text-violet-600 text-xl"
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border-none border-violet-300 outline-none focus:outline-violet-400 p-2 rounded-md w-full text-violet-400"
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border-none border-violet-300 outline-none focus:outline-violet-400 p-2 rounded-md w-full text-violet-400"
      />
    )}
    {error && <p className="text-red-500">{error}</p>}
  </div>
);

const SelectField = ({ label, name, value, onChange, options, error }) => (
  <div>
    <label
      htmlFor={name}
      className="block font-semibold py-2 text-violet-600 text-xl"
    >
      {label}
    </label>
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="border-none border-violet-300 outline-none focus:outline-violet-400 p-2 rounded-md w-full text-violet-400"
    >
      <option value="">{`Select ${name}`}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500">{error}</p>}
  </div>
);

const Enquiry = () => {
  const [formData, setFormData] = useState({
    session: "",
    name: "",
    email: "",
    telephone: "",
    class: "",
    message: "",
    bestTimeToCall: "",
    heardAbout: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "telephone") {
      // Remove any non-numeric characters
      newValue = newValue.replace(/\D/g, "");

      // Check if the telephone number is longer than 10 digits
      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10); // Trim to 10 digits
      }
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Basic validation
    const fields = [
      "session",
      "name",
      "email",
      "telephone",
      "class",
      "message",
      "bestTimeToCall",
      "heardAbout",
    ];
    fields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = `Please enter ${
          field === "session" ? "select" : "a"
        } ${field}`;
      } else if (field === "email" && !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Please enter a valid email";
      } else if (field === "telephone" && formData.telephone.length < 10) {
        errors.telephone = "Please enter a valid telephone number";
      }
    });

    if (Object.keys(errors).length === 0) {
      // Form submission logic goes here
      console.log("Form submitted successfully:", formData);
      navigate("/");
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="flex justify-center items-center  pb-6  pt-6 bg-violet-100 ">
      <div className="bg-violet-300 p-8 rounded-md shadow-md">
        <h1 className="text-center text-3xl text-violet-600 font-mono pb-6">
          Fill the form we will contact you
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <SelectField
            label="Select session"
            name="session"
            value={formData.session}
            onChange={handleChange}
            options={["2023-2024", "2024-2025"]}
            error={errors.session}
          />
          <FormField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormField
            label="Telephone"
            name="telephone"
            type="tel"
            value={formData.telephone}
            onChange={handleChange}
            error={errors.telephone}
          />
          <SelectField
            label="Please select class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            options={["V", "VI", "X", "IX", "XI", "XII"]}
            error={errors.class}
          />
          <FormField
            label="Message"
            name="message"
            type="textarea"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          <SelectField
            label="What is the best time to call you?"
            name="bestTimeToCall"
            value={formData.bestTimeToCall}
            onChange={handleChange}
            options={["Morning", "Afternoon", "Evening"]}
            error={errors.bestTimeToCall}
          />
          <SelectField
            label="Where did you hear about Edumate?"
            name="heardAbout"
            value={formData.heardAbout}
            onChange={handleChange}
            options={["Internet", "Friends", "Advertisement", "Other"]}
            error={errors.heardAbout}
          />
          <div className="flex justify-center items-center">
            <button className="bg-violet-700 rounded-lg text-white px-4 py-2 font-semibold hover:bg-white hover:text-violet-600 hover:border-violet-400 duration-300">
              Submit Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
