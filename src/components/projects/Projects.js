import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="TinyNotepad"
          des=" This is a PHP code that handles a note-taking system. Below is a description of each part of the code"
          src="https://main.gigasoft.com.pl/img/notepad.png"
          githubLink="https://github.com/Turbo1337GS/TinyNotepad"
        />
         <ProjectsCard
          title="RealTimeChat"
          des=" Realtime chat using GraphQL Live Queries, Next.js and NextAuth.js "
          src="https://main.gigasoft.com.pl/img/chat.png"
          githubLink="https://github.com/Turbo1337GS/RealTimeChat."
        />
      
      </div>
    </section>
  );
}

export default Projects