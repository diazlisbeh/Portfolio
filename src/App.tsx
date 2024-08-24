import "./App.css";
import Navbar from "./componets/Navbar";
import About from "./componets/About";
import ExperienceContainer from "./componets/ExperienceContainer";
import ExperienceItem, {
  ExperienceInterface,
} from "./componets/ExperienceItem";
import experienceData from "./data/experience.json";
import Skills from "./componets/Skills";
import ProjectContainer from "./componets/ProjectsContainer";
import projectData from "./data/projects.json";
import ProjectItem, { Project } from "./componets/ProjectsItem";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="container mx-auto px-6 pt-24">
        <About />
        <ExperienceContainer>
          <div>
            {experienceData.items.map((item: ExperienceInterface) => (
              <ExperienceItem data={item}></ExperienceItem>
            ))}
          </div>
        </ExperienceContainer>
        <Skills />
        <ProjectContainer>
          {projectData.projects.map((item: Project) => (
            <ProjectItem data={item}></ProjectItem>
          ))}
        </ProjectContainer>
      </main>
    </>
  );
}

export default App;
