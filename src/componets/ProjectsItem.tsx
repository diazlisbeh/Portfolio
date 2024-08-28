import { Project } from "../Types/Projets";
import { ExternalLink, Github } from "lucide-react";
interface ProjectProps {
  data: Project;
}

const ProjectItem: React.FC<ProjectProps> = ({ data }) => {
  return (
    <div className="bg-bunker-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm h-fit  hover:scale-105  transition-all duration-300">
      <div className="flex flex-col items-start">
        <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
        <p>{data.description}</p>
      </div>
      <div className="flex flex-col align-end">
        <div className="flex flex-wrap gap-2 mb-4 mt-4">
          {data.tech.map((t) => (
            <div
              key={t}
              className=" pl-2 pr-2 rounded-lg bg-primary-50 text-bunker-950 "
            >
              {t}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-5 rounded-lg border-white">
          <div className="flex hover:opacity-50">
            <Github></Github>
            <a className="ml-2" href={data.github} target="_blank">
              Repository
            </a>
          </div>
          <div className="flex hover:opacity-50">
            <ExternalLink></ExternalLink>
            <a className="ml-2" href={data.live} target="_blank">
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between"></div>
    </div>
  );
};

export default ProjectItem;
