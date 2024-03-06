import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function BlockquoteWithImage() {
  return (
    <div className="h-full  flex items-center justify-center">
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
      </div>
    </div>
  );
}
