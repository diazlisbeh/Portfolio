import "./App.css";
import Navbar from "./componets/Navbar";
import About from "./componets/About";
import ExperienceContainer from "./componets/ExperienceContainer";
import ExperienceItem from "./componets/ExperienceItem";
import experienceData from "./data/experience.json";
import Skills from "./componets/Skills";
import ProjectContainer from "./componets/ProjectsContainer";
import projectData from "./data/projects.json";
import ProjectItem from "./componets/ProjectsItem";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import { ExperienceInterface } from "./Types/Experince";
import { Project } from "./Types/Projets";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-bunker-950 via-bunker-900 to-bunker-950 text-bunker-100">
        <Navbar />
        <main className="container mx-auto px-6 pt-24 ">
          <About />
          <ExperienceContainer>
            <div>
              {experienceData.items.map((item: ExperienceInterface) => (
                <ExperienceItem key={item.id} data={item}></ExperienceItem>
              ))}
            </div>
          </ExperienceContainer>
          <ProjectContainer>
            {projectData.projects.map((item: Project) => (
              <ProjectItem key={item.id} data={item}></ProjectItem>
            ))}
          </ProjectContainer>
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
