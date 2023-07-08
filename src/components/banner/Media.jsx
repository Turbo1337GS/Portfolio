import React from 'react'
import { SiGithub,SiGmail } from "react-icons/si";
import { FaSearch,FaRobot } from 'react-icons/fa';
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/Turbo1337GS" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="mailto:Turbo@GigaSoft.com.pl">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://GigaSoft.com.pl">
              <FaSearch /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://main.gigasoft.com.pl/AI">
              <FaRobot /></a>
            </span>
          </div>
        </div>
        <div>
      
        </div>
      </div>
  )
}

export default Media