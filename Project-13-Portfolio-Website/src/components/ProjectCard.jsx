import { FaGithub } from 'react-icons/fa6';
import tatami from '../assets/Projects/tatami.png'
const ProjectCard = ({ project }) => {
  return (
    <div className="shadow-md px-3 py-4">
      <div className="max-w-xs flex items-center mb-2">
        <img src={project.image} alt="" className="w-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-mono">
        {(project.title).slice(0, 20)}
      </h3>
      <p className="text-md font-light leading-normal mb-6">
        {project.desc.slice(0, 100)}
      </p>
      <div className="flex items-center gap-2 my-4">
        <a
          href={project.view}
          className="w-fit px-3 py-2 bg-secondary border-2 border-secondary text-lg text-white hover:opacity-90 rounded-md"
          target="_blank"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          className="w-fit px-3 py-2 bg-transparent border-2  hover:bg-secondary border-secondary text-lg text-secondary hover:text-white hover:opacity-90 rounded-md flex gap-1 items-center"
          target="_blank"
        >
          <FaGithub /> GitHub{" "}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard