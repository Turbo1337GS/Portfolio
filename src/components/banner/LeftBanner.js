import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Backend developer.","Skilled in C++ with a keen eye for efficiency and optimization",
      "Passionate about software development, creating seamless user experiences.",
      "Proficient in backend development, ensuring stable and reliable system operations.",
      "At the young age of 21, bringing fresh perspectives and innovative solutions.",
      "Combining theoretical knowledge with practical experience for impactful software creation."
    ],
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 10,
      delaySpeed: 10000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal"> 👀🙋‍♂️  </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Tomasz Kolk</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        A passionate software engineer and backend developer, I have been immersed in the world of programming since the tender age of seven. This early start gave me a deep understanding of coding, its logic, and a unique ability to master new languages swiftly.
        <br></br><br></br>
        C++ is my forte, a language I have honed my skills in throughout my academic and professional career. I appreciate its efficient and performant nature, and I thrive on the challenges it presents. I have a knack for optimizing code and squeezing out maximum performance, contributing to leaner, faster, and more reliable software applications.
        <br></br><br></br>

        Although I am well-versed in Python, it has been a while since I have actively worked in this language. However, my foundational understanding of it remains solid, and I am confident that I could easily refresh my skills when needed.
        <br></br><br></br>

        Currently, I am expanding my knowledge base by learning TypeScript. I am drawn to its flexibility and the fact that it offers static typing, a feature I appreciate from my extensive work with C++. TypeScript is a powerful tool for building large-scale applications, and I am eager to implement this newfound knowledge in my future projects.
        <br></br><br></br>

        While my primary focus and expertise lie in backend development, I have some exposure to UI. However, I must admit that this is not my strongest suit. My passion and strength lie in working behind the scenes, creating the robust engines that drive applications. I am happiest when working on the server-side, building, and managing the technology that powers the user-facing components.
        <br></br><br></br>

        In conclusion, as a devoted software engineer, my aim is to continue learning, improving, and pushing the boundaries of what is possible in backend development. I am committed to using my skills and experience to create innovative and impactful software solutions.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner