import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const programmingLanguages = [
    { name: 'C++', percentage: '95%' },
    { name: 'Python', percentage: '33%' },
    { name: 'PHP', percentage: '80%' },
    { name: 'C#', percentage: '40%' },
    { name: 'C', percentage: '65%' },
    { name: 'SQL', percentage: '70%' },
    { name: 'TypeScript', percentage: '65%' },
    { name: 'JavaScript', percentage: '70%' },


    { name: 'HTML', percentage: '50%' },
    { name: 'CSS', percentage: '40%' },

  ];

  const otherTechnologies = [
    { name: 'Boost.org', percentage: '60%' },
    { name: 'ImGui', percentage: '80%' },
    { name: 'React', percentage: '75%' },
    { name: 'NextJS', percentage: '65%' },
    { name: 'NanoSVG', percentage: '55%' },
    { name: 'Docker', percentage: '40%' },
    { name: 'QT.io', percentage: '50%' },
    { name: 'JSON', percentage: '90%' },
    { name: 'Visual Studio', percentage: '75%' },
    { name: 'Visual Code', percentage: '85%' },

  ];

  // Sortowanie i odwrócenie kolejności tablic
  //programmingLanguages.sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
  //otherTechnologies.sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div className="overflow-x-hidden" key={index}>
        <p className="text-sm uppercase font-medium">{skill.name}</p>
        <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
          <motion.span
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ width: skill.percentage }}
            className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
          >
            <span className="absolute -top-7 right-0">{skill.percentage}</span>
          </motion.span>
        </span>
      </div>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-40"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Known programming languages</h2>
        </div>
        <div className="flex flex-col gap-6">
          {renderSkills(programmingLanguages)}
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Library / Frameworks (and other) skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {renderSkills(otherTechnologies)}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
