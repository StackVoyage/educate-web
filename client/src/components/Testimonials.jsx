import React from "react";
import imageT from "../assets/testimonials-image.png";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="bg-violet-50 py-8 mt-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-3xl font-mono mb-4 text-violet-800">
          What Students have to Say ?
        </h1>
      </div>

      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <TestimonialsCard
            src={imageT}
            name="Ashish Mishra"
            message="I enrolled with Edumate for SAT preparation, and I must say, it was the best decision ever! Their personalized approach to teaching, coupled with interactive study materials, helped me achieve a score beyond my expectations. Kudos to the team at Edumate for their dedication and support."
          />
          <TestimonialsCard
            src={imageT}
            name="Yogesh Kumar"
            message="As a parent, I couldn't be happier with the progress my child has made since joining Edumate's tutoring program. Their tutors go above and beyond to ensure every student understands the concepts thoroughly. I highly recommend Edumate to anyone seeking quality education and personalized attention."
          />
          <TestimonialsCard
            src={imageT}
            name="Raman Iyer"
            message="Studying with Edumate has been a delightful experience for my child. The tutors make learning enjoyable with interactive lessons and engaging activities. Thanks to Edumate, my child now looks forward to every study session. Highly recommended for parents looking to make learning fun for their kids."
          />
          <TestimonialsCard
            src={imageT}
            name="Rajnish Singh"
            message="I can't thank Edumate enough for their unwavering support during my college admission journey. From SAT prep to college essay assistance, their team guided me every step of the way. Thanks to Edumate, I got accepted into my dream college. I highly recommend their services to all aspiring students."
          />
          <TestimonialsCard
            src={imageT}
            name="Rajnish Singh"
            message="I can't thank Edumate enough for their unwavering support during my college admission journey. From SAT prep to college essay assistance, their team guided me every step of the way. Thanks to Edumate, I got accepted into my dream college. I highly recommend their services to all aspiring students."
          />
          <TestimonialsCard
            src={imageT}
            name="Rajnish Singh"
            message="I can't thank Edumate enough for their unwavering support during my college admission journey. From SAT prep to college essay assistance, their team guided me every step of the way. Thanks to Edumate, I got accepted into my dream college. I highly recommend their services to all aspiring students."
          />
          <TestimonialsCard
            src={imageT}
            name="Rajnish Singh"
            message="I can't thank Edumate enough for their unwavering support during my college admission journey. From SAT prep to college essay assistance, their team guided me every step of the way. Thanks to Edumate, I got accepted into my dream college. I highly recommend their services to all aspiring students."
          />
          <TestimonialsCard
            src={imageT}
            name="Arman Mishra"
            message="I can't thank Edumate enough for their unwavering support during my college admission journey. From SAT prep to college essay assistance, their team guided me every step of the way. Thanks to Edumate, I got accepted into my dream college. I highly recommend their services to all aspiring students."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
