import React, { useState } from "react";

const FAQ = () => {
  const [activeIndices, setActiveIndices] = useState(Array(10).fill(false));

  const toggleAccordion = (index) => {
    const newActiveIndices = [...activeIndices];
    newActiveIndices[index] = !newActiveIndices[index];
    setActiveIndices(newActiveIndices);
  };

  const faqData = [
    {
      question: "What are the timings of the coaching classes?",
      answer:
        "Our coaching classes run from Monday to Friday, from 9:00 AM to 6:00 PM.",
    },
    {
      question: "How can I enroll my child in your coaching program?",
      answer:
        "You can enroll your child by filling out the online enrollment form on our website or by visiting our center during office hours.",
    },
    {
      question: "Are there any scholarships available for students?",
      answer:
        "Yes, we offer scholarships to deserving students based on their academic performance and financial need. Please contact us for more information.",
    },
    {
      question: "What subjects do you offer coaching in?",
      answer:
        "We offer coaching in a wide range of subjects including mathematics, science, English, history, geography, and more. Please check our course offerings for details.",
    },
    {
      question: "Do you provide individualized tutoring?",
      answer:
        "Yes, we offer personalized one-on-one tutoring sessions for students who require extra help or want to excel in specific subjects.",
    },
    {
      question: "How experienced are your teachers?",
      answer:
        "Our teachers are highly experienced professionals with years of teaching experience and expertise in their respective subjects.",
    },
    {
      question: "Is there a trial period available for new students?",
      answer:
        "Yes, we offer a trial period for new students to experience our coaching classes and decide if it's the right fit for them.",
    },
    {
      question: "What is the student-teacher ratio in your coaching classes?",
      answer:
        "We maintain a low student-teacher ratio to ensure personalized attention and effective learning. Typically, our classes have a ratio of 10:1.",
    },
    {
      question:
        "Are there any extracurricular activities offered at your coaching center?",
      answer:
        "Yes, we offer a variety of extracurricular activities such as sports, arts and crafts, music, and more to enhance the overall development of our students.",
    },
    {
      question: "How can I contact your coaching center for further inquiries?",
      answer:
        "You can contact us by phone at (123) 456-7890 or by email at info@example.com. Our office hours are from Monday to Friday, 9:00 AM to 5:00 PM.",
    },
  ];

  return (
    <div className=" p-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-violet-700">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {faqData.map((item, index) => (
          <div key={index} className="border border-violet-200 rounded p-4">
            <button
              className="flex justify-between w-full mb-2 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-violet-600">
                {item.question}
              </h3>
              <svg
                className={`w-6 h-6 transition-transform transform  ${
                  activeIndices[index]
                    ? "rotate-180 fill-current text-violet-600"
                    : "fill-current text-violet-600"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {activeIndices[index] && (
              <p className="text-violet-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
