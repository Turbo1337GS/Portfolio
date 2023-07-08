import React from 'react';
import { FaRobot } from "react-icons/fa";

const RightBanner = () => {
  return (
    <div className="w-full flex justify-end items-center">
      <div className="w-[80%] h-[80%] relative">
        <p>GigAI Demo</p>
        <div className="w-full h-full absolute top-0 right-[15%] bg-black opacity-0 rounded-3xl"></div>
        <video
          className="w-full h-full rounded-3xl"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src="https://main.gigasoft.com.pl/Images/GigAI%20Demo.webm" type="video/webm" />
        </video>
      </div>
        <a href="https://main.gigasoft.com.pl/AI" className="flex items-center top-10">
          <FaRobot />
        </a>
    </div>
  );
}

export default RightBanner;
