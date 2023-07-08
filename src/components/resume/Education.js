import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  const educationData = [
    {
      title: "Future - GigaSoft own company ",
      subTitle: "https://gigasoft.com.pl",
      result: "2022 - 2023",
      des: `In my plans, I have the intention of opening a company that will specialize in software development. Given my good command of C++/PHP/TypeScript, I aim to create software in the following categories:
      Security: Developing robust and secure software solutions to protect sensitive data and systems.
      Video/Audio Editing Tools: Creating intuitive and feature-rich tools for editing and manipulating videos and audio files.
      System Utilities: Designing small utility applications such as shared folders across multiple computers (via a server) or remote computer control.
      Developer Tools: Building software specifically tailored for developers, such as Integrated Development Environments (IDEs) and debuggers.
      Additionally, I believe in incorporating cutting-edge technologies and leveraging artificial intelligence to enhance the functionality and user experience of the software I develop.
      My goal is to provide efficient and reliable software solutions that meet the specific needs and challenges of businesses and individuals.
      Through continuous learning and keeping up with the latest industry trends, I aim to deliver innovative and forward-thinking software products.
      I am excited to embark on this entrepreneurial journey and contribute to the ever-evolving world of software development.
      `
    },
    {
      title: "First Big project - Custom SI",
      subTitle: "https://main.gigasoft.com.pl/AI",
      result: "2022 - 2023",
      des: "Based on the BERT model, I have created my own Chatbot-AI, which is actually written in three languages: PHP, TypeScript, and a bit of C++! It's my biggest project ever, though we still have hardware limitations, so the bot has a token limit of 10,000!",
    },
    {
      title: "Learn JS/TS",
      subTitle: "Intermediate",
      result: "2019 - 2020",
      des: "I noticed that JavaScript is becoming increasingly popular, bringing along a range of possibilities. Therefore, I've decided to start learning it! I've been improving my web development skills, particularly focusing on UI, thanks to the abundance of frameworks that aid in design.",
    },
    {
      title: "First projects",
      subTitle: "Intermediate",
      result: "2017 - 2018",
      des: "After familiarizing myself with C++, Python, and PHP, I started working on my first small projects. These projects were simple websites, and I didn't focus much on UI design since I'm not a frontend developer but a software engineer. I received multiple requests to create basic websites or develop client applications for existing websites, which led me to learn the curl library in C++.",
    },
    {
      title: "Learn Python",
      subTitle: "Intermediate",
      result: "2016 - 2017",
      des: "After reaching an intermediate level of proficiency, I decided to learn Python in order to create simple scripts. I learned Python from YouTube tutorials and documentation.",
    },
    {
      title: "Learn PHP",
      subTitle: "Intermediate",
      result: "2013 - 2015",
      des: "After attaining an intermediate-advanced level in C++, I started learning PHP to develop applications with network connections. I acquired PHP knowledge through books and YouTube tutorials.",
    },
    {
      title: "Beginning to learn programming",
      subTitle: "https://cpp0x.pl - Advanced",
      result: "2009 - 2013",
      des: "As a 7-year-old, I started learning C++ primarily from the website cpp0x.pl, and it became my introduction to programming.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2009 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>

        </div>{/* h-[1000px]*/ }
        <div className="mt-6 lgl:mt-14 w-full h-[3000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {educationData.map((data, index) => (
            <ResumeCard
              key={index}
              title={data.title}
              subTitle={data.subTitle}
              result={data.result}
              des={data.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
