import React from "react";
import PropTypes from "prop-types";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Importing quote icons from react-icons

const TestimonialsCard = ({ src, name, message }) => {
  return (
    <div className="max-w-lg mx-auto text-center bg-white rounded-lg shadow-lg p-8 border border-violet-200">
      <div className="flex justify-center items-center gap-4">
        <div className="flex items-center justify-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full ">
            <img src={src} size="lg" alt="" />
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-purple-600">{name}</h2>
      </div>

      <div className="relative mt-2">
        <FaQuoteLeft
          className=" text-violet-400 top-0 left-0 -mt-4 ml-1"
          size={10}
        />
        <p className="text-sm text-violet-600 mt-2">{message}</p>
        <FaQuoteRight
          className="absolute text-violet-400 bottom-0 right-0 -mb-4 mr-1"
          size={10}
        />
      </div>
    </div>
  );
};

TestimonialsCard.propTypes = {
  src: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default TestimonialsCard;
