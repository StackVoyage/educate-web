import React from "react";
import facultyImage from "../assets/student_profile.png";

import FacultyCard from "./FacultyCard";

const Faculty = () => {
  return (
    <div className="p-12 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl text-violet-800 font-mono">
          Our Core Team
        </h1>
        <p className="max-w-2xl text-center leading-8 text-lg text-violet-400 py-4">
          The educators and experts at Edumate are dedicated to enhancing your
          child's learning and reading abilities more efficiently compared to
          traditional methods. Through our innovative and enjoyable approaches,
          we aim to ignite their curiosity and accelerate their language
          acquisition, setting them apart from their peers.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <FacultyCard
          src={facultyImage}
          name="Ashish Mishra"
          qualification="Btech in Elctronics"
          message="I enrolled with Edumate for SAT preparation,"
        />
        <FacultyCard
          src={facultyImage}
          name="Ashish Mishra"
          qualification="Btech in Elctronics"
          message="He has 22 years of IIT-JEE teaching experience. He is unarguably one of the best teachers of Organic Chemistry in India."
        />
        <FacultyCard
          src={facultyImage}
          name="Ashish Mishra"
          qualification="Btech in Elctronics"
          message="I enrolled with Edumate for SAT preparation, and I must say, it was the best decision ever!"
        />
        <FacultyCard
          src={facultyImage}
          name="Ashish Mishra"
          qualification="Btech in Elctronics"
          message="I enrolled with Edumate for SAT preparation, and I must say, it was the best decision ever! "
        />
        <FacultyCard
          src={facultyImage}
          name="Ashish Mishra"
          qualification="Btech in Elctronics"
          message="I enrolled with Edumate for SAT preparation, and I must say, it was the best decision ever! Their personalized approach to teaching, coupled with interactive study materials, helped me achieve a score beyond my expectations. Kudos to the team at Edumate for their dedication and support."
        />
      </div>
    </div>
  );
};

export default Faculty;
