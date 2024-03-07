import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import arrowLogo from "../assets/arrow_logo.png";
import studentProfile from "../assets/student_profile.png";
import modelStudent from "../assets/model-image.png";
import About from "./About";
import DemoLectures from "./DemoLectures";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import SignIn from "./auth/SignIn";
import Advertising from "./Advertising";

const CourseButton = ({ text }) => (
  <button className="mt-4 flex items-center w-fit rounded-3xl py-2 px-2 border border-gray-300 text-xl font-semibold hover:bg-violet-500 duration-300 active:bg-violet-700 focus:ring focus:ring-violet-300">
    <span className="">
      <FiArrowUpRight size={25} className="text-violet-800" />
    </span>{" "}
    <span className="">{text}</span>
  </button>
);

const courseItem = [
  ["Web development", "Designing"],
  ["AI", "UI/UX Designing", "Machine Learning"],
  ["Wordpress Development"],
];

const Home = () => (
  <div>
    <div className="w-full flex ">
      <div className="flex w-1/2 justify-center items-center pt-20">
        <h1 className="text-7xl font-bold text-violet-400 ml-6">
          ONLINE LEARNING
        </h1>
        <img src={arrowLogo} alt="arrow_logo" className="w-60 h-20 mr-12" />
      </div>
      <div className="w-1/4 flex items-center">
        <p className="text-2xl text-left text-violet-400 flex-wrap">
          World class training and development programs developed by top
          teachers
        </p>
      </div>
      <div className="flex md:flex-col w-1/4 justify-center items-center relative">
        <div className="flex justify-center items-center">
          <img
            src={studentProfile}
            alt="students_profile"
            className="size-20"
          />
          <img
            src={studentProfile}
            alt="students_profile"
            className="size-20 -ml-8"
          />
          <p className="bg-gray-400 rounded-full w-20 h-20 flex justify-center items-center text-3xl text-white font-bold -ml-8">
            20K
          </p>
        </div>
        <p className="text-lg text-center text-violet-400 font-semibold p-2">
          Students passed
        </p>
        {/* Vertical line */}
        <div className="absolute inset-y-0 right-80 h-full bg-gray-300 w-0.5 z-[-1] "></div>
      </div>
    </div>
    <div className="w-full bg-gray-300 h-0.5 mt-8"></div>
    <div className="flex ">
      <div className="w-1/2 p-12 flex flex-col justify-start ml-8">
        <h1 className="text-3xl text-violet-700 font-semibold">
          More than <span className="font-bold text-4xl">2600+</span>{" "}
          <span className="block">courses from us</span>
        </h1>
        <div className="flex flex-wrap">
          {courseItem.map((row, index) => (
            <div key={index} className="flex flex-wrap gap-2">
              {row.map((text, index) => (
                <CourseButton key={index} text={text} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 bg-violet-300 flex -mt-12 justify-center items-center ">
        <img src={modelStudent} alt="" />
      </div>
    </div>
    <About />
    <DemoLectures />
    <Testimonials />
    <Advertising />
    <Footer />
  </div>
);

export default Home;
