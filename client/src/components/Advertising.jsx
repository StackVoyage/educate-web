import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import advertiseImage from "../assets/addvertise.png";

const Advertising = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // After 3 seconds, set isVisible to true
    }, 3000);

    // Clear the timer on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  const handleImageClick = () => {
    navigate("/enquiry"); // Redirect to "/enquiry" page
  };

  const handleHideClick = () => {
    setIsVisible(false); // Hide the advertising component
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="relative">
            <img
              src={advertiseImage}
              alt=""
              className="rounded-lg border border-white shadow-2xl cursor-pointer"
              style={{ height: "27rem" }}
              onClick={handleImageClick}
            />
            <button
              className="absolute top-2 right-2 bg-black text-violet-400 rounded-full w-8 h-8 flex justify-center items-center font-bold "
              onClick={handleHideClick}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Advertising;
