import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import educateLearning1 from "../assets/Education-Learning.png";
import educateLearning2 from "../assets/Education-Learning2.jpg";
import educateLearning3 from "../assets/Education-Learning3.png";
import educateLearning4 from "../assets/Education-Learning4.png";

const BlockquoteWithImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="w-full mx-auto bg-violet-200 shadow-md rounded-lg overflow-hidden">
        <div className="text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
            alt="Bulb"
            className="w-16 mx-auto mt-4"
          />
        </div>
        <div className="p-5">
          <div className="text-center">
            <p className="text-3xl text-violet-700 font-semibold font-italic leading-relaxed">
              <RiDoubleQuotesL className="inline w-6 h-6 mr-2 -mt-10" />
              Many of life's failures are people who did not realize how close
              they were to success when they gave up.
              <RiDoubleQuotesR className="inline w-6 h-6 ml-2 -mt-6" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex py-12">
        <div className="w-1/2 mr-4 p-4 flex items-center justify-start flex-col">
          <h1 className="text-5xl font-mono text-violet-400">About Us</h1>
          <p className="text-lg font-semibold p-8 leading-relaxed text-gray-800">
            Welcome to{" "}
            <span className="font-semibold text-violet-600">Edumate</span>, your
            partner in personal and professional growth. At Educate, we're
            dedicated to helping you unlock your full potential and achieve your
            goals. Our experienced coaches provide personalized guidance and
            support to empower you on your journey to success. With a focus on
            empowerment and growth, Edumate offers tailored coaching programs
            designed to meet your unique needs. Whether you're pursuing career
            advancement, personal development, or greater well-being, we're here
            to help you thrive. Join us at Edumate and discover the power of
            transformation. Let's turn your aspirations into achievements,
            together.
          </p>
        </div>
        <div className="w-1/2 ml-4 p-4 py-16 shadow-2xl rounded-2xl bg-violet-300">
          <Slider {...settings}>
            {[
              educateLearning1,
              educateLearning2,
              educateLearning3,
              educateLearning4,
            ].map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Educate Learning ${index + 1}`}
                  className="w-full h-80 rounded-2xl"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlockquoteWithImage;
