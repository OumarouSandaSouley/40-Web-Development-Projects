import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { projects1 } from '../constant';

const MyProjects = () => {
  return (
    <section className="w-full h-full bg-white px-4 py-6 sm:border-l-2 border-gray-800">
      <h1 className="text-3xl font-bold text-center mb-3">My Projects</h1>
      <p className="text-md font-light text-center mb-6">Here are some of my famous projects</p>
      <div className="py-4 w-full flex items-cen">
        <div className="grid sm:grid-cols-2 gap-4">
          {projects1.map((project)=>{
            return <ProjectCard project = {project} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default MyProjects