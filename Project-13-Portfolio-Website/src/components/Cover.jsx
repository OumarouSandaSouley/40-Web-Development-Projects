import React from "react";
import { ArrowDownCircle, ArrowRightCircle } from "lucide-react";

const Cover = () => {
  return (
    <div
      className="w-full h-full px-4 py-16 flex items-center flex-col justify-between animate-fade-in-up bg-secondary"
      style={{ backgroundColor: "#87CEEB" }}
    >
      <h1 className="text-5xl font-bold text-white text-center leading-normal mb-6 sm:px-3 sm:py-2 sm:shadow-lg">
        Welcome to my <br /> Portfolio
      </h1>
      <p className="text-xl font-mono mb-4 text-gray-800 animate-pulse">
        Turn the page to explore my world
      </p>
      <ArrowRightCircle
        className="w-10 h-10 animate-bounce text-primary"
        style={{ color: "#e79434" }}
      />
    </div>
  );
};

export default Cover;
