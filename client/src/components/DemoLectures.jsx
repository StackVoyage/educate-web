import React from "react";
const videoData = [
  {
    src: "https://player.vimeo.com/external/374268214.sd.mp4?s=a8e7974b7047a044af8f1e112d95d3d75d8c9a10&profile_id=164&oauth2_token_id=57447761",
    title: "Thermodynamics",
  },
  {
    src: "https://player.vimeo.com/external/372183699.sd.mp4?s=96e31754a042eae77c9672d14f747cba0ca3b50c&profile_id=164&oauth2_token_id=57447761",
    title: "Video 2",
  },
  {
    src: "https://player.vimeo.com/external/308157757.sd.mp4?s=ee704e13dca93ed0356d6002b203a8f12b1c9190&profile_id=164&oauth2_token_id=57447761",
    title: "Video 3",
  },
  {
    src: "https://player.vimeo.com/external/340846144.sd.mp4?s=0d5f39300c3ed7d83726a0ac0fa4154939063249&profile_id=164&oauth2_token_id=57447761",
    title: "Video 4",
  },
];

const DemoLectures = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center text-violet-700 mb-8 font-mono">
        Demo Videos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
        {videoData.map((video, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-center items-center rounded-lg shadow-lg"
          >
            <video
              src={video.src}
              className="w-full h-80 rounded-lg hover:opacity-95 cursor-pointer"
              controls
            ></video>
            <p className="font-semibold text-center text-violet-800 p-4">
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoLectures;
