import React from "react";
import { FaBell } from "react-icons/fa";
import { Marquee } from "@devnomic/marquee";

import "@devnomic/marquee/dist/index.css";

const Marquee2 = () => {
  return (
    <Marquee
      pauseOnHover={true}
      className="motion-reduce:overflow-auto gap-[3rem] [--duration:15s] p-6 bg-violet-100"
      innerClassName="motion-reduce:animate-none motion-reduce:first:hidden gap-[3rem] [--gap:3rem]"
    >
      <h1 className="flex justify-center items-center gap-4 text-violet-400 text-2xl ">
        <FaBell className="text-violet-400" />
        Subscribe to my channel Subscribe to my channel Subscribe to my channel
      </h1>
      <h1 className="flex justify-center items-center gap-4 text-violet-400 text-2xl">
        <FaBell className="text-violet-400" />
        Subscribe to my channel Subscribe to my channel
      </h1>
      <h1 className="flex justify-center items-center gap-4 text-violet-400 text-2xl">
        <FaBell className="text-violet-400" />
        Subscribe to my channel Subscribe to my channel
      </h1>
    </Marquee>
  );
};

export default Marquee2;
