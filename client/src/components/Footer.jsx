import React from "react";
import { Link } from "react-router-dom";

// ContactInfo component for displaying contact information
const ContactInfo = () => (
  <div className="text-2xl py-4 flex flex-col justify-center">
    <p className="flex flex-col items-start py-6">
      Contact Us: <a href="tel:+911234567890">+91-12345-67890</a>
    </p>
    <p className="flex flex-col items-start py-6">
      Email: <a href="mailto:testing@gmail.com">testing@gmail.com</a>
    </p>
  </div>
);

// NavigationLinks component for displaying navigation links
const NavigationLinks = () => (
  <>
    <LinkItem to="/enquiry" text="Enquiry" />
    <LinkItem to="/blogs" text="Blogs" />
    <LinkItem to="/login" text="Login" />
    <LinkItem to="/faq" text="FAQ" />
  </>
);

// LinkItem component for individual navigation link
const LinkItem = ({ to, text }) => (
  <Link to={to} className="py-6 hover:cursor-pointer text-2xl">
    {text}
  </Link>
);

// InquiryForm component for displaying inquiry form
const InquiryForm = () => (
  <div className="h-80">
    <InputField type="text" placeholder="Name" />
    <InputField type="email" placeholder="Email" />
    <textarea
      placeholder="Message"
      className="mb-4 w-full p-2 rounded-lg border-none outline-none focus:outline-violet-400"
    ></textarea>
    <button className="w-40 bg-violet-700 rounded-lg text-white px-4 py-2 hover:bg-white hover:text-violet-600 hover:border hover:border-violet-700 duration-300">
      Submit Details
    </button>
  </div>
);

// InputField component for individual input field
const InputField = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="mb-4 w-full p-2 rounded-lg border-none outline-none focus:outline-violet-400"
  />
);

const Footer = () => {
  return (
    <>
      <footer className="bg-violet-300 text-violet-700 py-8 px-4 md:flex md:justify-around mb-10">
        {/* 1st part */}
        <div className="flex flex-col justify-center md:w-1/4">
          <h1 className="text-5xl mb-4 hover:text-white duration-300 cursor-pointer font-bold">
            Edumate
          </h1>
          <ContactInfo />
        </div>

        {/* 2nd part */}
        <div className="flex flex-col w-full justify-center md:w-1/4 items-center">
          <NavigationLinks />
        </div>

        {/* 3rd part */}
        <div className="flex flex-col justify-center md:w-1/4">
          <h2 className="text-2xl mb-4 py-4">Want to learn more?</h2>
          <InquiryForm />
        </div>

        {/* 4th part */}
        <div className="flex flex-col w-full justify-center md:w-1/4 items-center">
          <LinkItem to="/enquiry" text="Faculty" />
          <LinkItem to="/blogs" text="Courses" />
          <LinkItem to="/login" text="Results" />
        </div>
      </footer>
      <div className="bg-white p-2 w-full gap-4 fixed bottom-0 flex justify-center items-center">
        <p className="text-violet-500 pl-6 mr-8">
          Before committing to an educational institution, it's crucial to
          explore the teaching standards, operational dynamics, and overall
          ambiance. Edumate extends you this invaluable opportunity, promising a
          transparent and engaging experience that sets the stage for your
          educational journey.
        </p>
        <a href="/book-demo">
          <button className="w-40 bg-violet-700 rounded-lg text-white px-4 py-2 hover:bg-white hover:text-violet-600 hover:border hover:border-violet-700 duration-300">
            BOOK DEMO
          </button>
        </a>
      </div>
    </>
  );
};

export default Footer;
