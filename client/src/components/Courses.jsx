import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

const CourseButton = ({ name, setActiveCourse }) => {
  return (
    <button
      className="p-2 w-[7rem] rounded-lg bg-violet-400 hover:bg-violet-700 font-semibold duration-300 text-white"
      onClick={() => setActiveCourse(name)}
    >
      {name}
    </button>
  );
};

const ListItem = ({ children }) => {
  return (
    <li className="flex items-start gap-2 py-1">
      <FiCheckCircle className="text-green-600 mt-1" />
      {children}
    </li>
  );
};

const Card = ({ title, price, validTill, buttonText, items }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("up");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setArrowDirection(arrowDirection === "up" ? "down" : "up");
  };

  return (
    <div className="border border-violet-300 max-w-xs shadow-xl rounded-lg w-fit p-8 flex justify-center items-center flex-col relative bg-white transform transition-all duration-500 hover:translate-y-3">
      <h3 className="font-montserrat text-xl font-semibold tracking-tighter text-center mb-4">
        {title}
      </h3>
      <p className="text-bold text-2xl">₹ {price}</p>
      <p className="text-lg text-red-500 font-semibold py-4">
        Valid Till {validTill}
      </p>
      <button className="py-2 px-5 bg-green-700 font-mono text-lg text-white w-40 rounded-lg">
        {buttonText}
      </button>
      <div className="bg-gray-200 h-0.5 w-full my-8"></div>
      <div className="flex gap-1 justify-center items-center">
        <h4 className="text-blue-700 font-semibold text-xl">
          Courses Includes
        </h4>
        <div onClick={toggleDropdown} className="cursor-pointer">
          {arrowDirection === "up" ? (
            <MdKeyboardArrowUp
              size={25}
              className="text-gray-400 cursor-pointer duration-300 hover:text-blue-500"
            />
          ) : (
            <MdKeyboardArrowDown
              size={25}
              className="text-gray-400 cursor-pointer hover:text-blue-500"
            />
          )}
        </div>
      </div>
      <div
        className={`${
          dropdownOpen
            ? "opacity-100 max-h-[200px] overflow-y-hidden"
            : "opacity-0 max-h-0 overflow-hidden"
        } transition-all duration-500`}
      >
        <ul className="mt-4 text-blue-700 font-semibold text-sm flex flex-col">
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState("CBSE");

  return (
    <div className="bg-violet-200 h-full">
      <div className="p-8 w-full gap-6 flex justify-center items-center">
        {["CBSE", "HSC", "JEE", "NEET", "NTSE", "OLYMPIAD"].map((course) => (
          <CourseButton
            key={course}
            name={course}
            setActiveCourse={setActiveCourse}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 flex-wrap h-screen  pb-[4rem]">
        {activeCourse === "CBSE" && (
          <>
            <Card
              title="Complete 11th & 12th PCM Target Year 2024"
              price="1999"
              validTill="2024 Exams"
              buttonText="Buy now"
              items={[
                "Cover all PCM Topics of Class 11th & 12th",
                "2600+ Recorded Video Lectures",
                "E-Study Material in PDF",
                "Daily Practice sheets(DPP’S)",
                "Student Performance Report(SPR)",
              ]}
            />
            <Card
              title="Complete 11th & 12th PCM Target Year 2024"
              price="1999"
              validTill="2024 Exams"
              buttonText="Buy now"
              items={[
                "Cover all PCM Topics of Class 11th & 12th",
                "2600+ Recorded Video Lectures",
                "E-Study Material in PDF",
                "Daily Practice sheets(DPP’S)",
                "Student Performance Report(SPR)",
              ]}
            />
            <Card
              title="Complete 11th & 12th PCM Target Year 2024"
              price="1999"
              validTill="2024 Exams"
              buttonText="Buy now"
              items={[
                "Cover all PCM Topics of Class 11th & 12th",
                "2600+ Recorded Video Lectures",
                "E-Study Material in PDF",
                "Daily Practice sheets(DPP’S)",
                "Student Performance Report(SPR)",
              ]}
            />
          </>
        )}
        {activeCourse === "JEE" && (
          <Card
            title="Complete 11th & 12th PCM Target Year 2024"
            price="1999"
            validTill="2024 Exams"
            buttonText="Buy now"
            items={[
              "Cover all PCM Topics of Class 11th & 12th",
              "2600+ Recorded Video Lectures",
              "E-Study Material in PDF",
              "Daily Practice sheets(DPP’S)",
              "Student Performance Report(SPR)",
            ]}
          />
        )}
        {activeCourse === "NTSE" && (
          <Card
            title="Complete 11th & 12th PCM Target Year 2024"
            price="1999"
            validTill="2024 Exams"
            buttonText="Buy now"
            items={[
              "Cover all PCM Topics of Class 11th & 12th",
              "2600+ Recorded Video Lectures",
              "E-Study Material in PDF",
              "Daily Practice sheets(DPP’S)",
              "Student Performance Report(SPR)",
            ]}
          />
        )}
        {activeCourse === "OLYMPIAD" && (
          <Card
            title="Complete 11th & 12th PCM Target Year 2024"
            price="1099"
            validTill="2024 Exams"
            buttonText="Buy now"
            items={[
              "Cover all PCM Topics of Class 11th & 12th",
              "2600+ Recorded Video Lectures",
              "E-Study Material in PDF",
              "Daily Practice sheets(DPP’S)",
              "Student Performance Report(SPR)",
            ]}
          />
        )}
        {activeCourse === "HSC" && (
          <Card
            title="Complete HSC PCM Target Year 2024"
            price="1499"
            validTill="2024 Exams"
            buttonText="Buy now"
            items={[
              "Cover all PCM Topics of HSC",
              "2000+ Recorded Video Lectures",
              "E-Study Material in PDF",
              "Daily Practice sheets(DPP’S)",
              "Student Performance Report(SPR)",
            ]}
          />
        )}
        {activeCourse === "NEET" && (
          <Card
            title="Complete HSC PCM Target Year 2024"
            price="1499"
            validTill="2024 Exams"
            buttonText="Buy now"
            items={[
              "Cover all PCM Topics of HSC",
              "2000+ Recorded Video Lectures",
              "E-Study Material in PDF",
              "Daily Practice sheets(DPP’S)",
              "Student Performance Report(SPR)",
            ]}
          />
        )}
        {/* Add more Card components for other courses */}
      </div>
    </div>
  );
};

export default Courses;
