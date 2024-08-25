import { Project } from "../Types/Projets";
interface ProjectProps {
  data: Project;
}

const ProjectItem: React.FC<ProjectProps> = ({ data }) => {
  return (
    <div className="bg-bunker-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
      <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default ProjectItem;
