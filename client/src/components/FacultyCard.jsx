import React from "react";
import PropTypes from "prop-types";

const FacultyCard = ({ src, name, message, qualification }) => {
  return (
    <div className="max-w-lg mx-auto text-center h-4/5 mt-[7rem]  bg-white rounded-lg shadow-lg p-8 border border-violet-200">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex  items-center justify-center mb-4">
          <div className="w-40 bg-violet-400  -mt-[7rem] h-40 flex items-center justify-center rounded-full ">
            <img src={src} size="lg" alt="" />
          </div>
        </div>
        <h2 className="text-lg font-semibold  text-purple-600">{name}</h2>
        <p className="text-lg  mb-2 text-purple-600">{qualification}</p>
        <div className="bg-gray-200 h-0.5 w-full"></div>
      </div>

      <div className="relative mt-2">
        <p className="text-sm text-violet-600 mt-2">{message}</p>
      </div>
    </div>
  );
};

FacultyCard.propTypes = {
  src: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default FacultyCard;
