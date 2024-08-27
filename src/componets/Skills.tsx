import Javascript from "../assets/javascript.svg";
import React from "../assets/react.svg";
import Azure from "../assets/cloud.svg";
import SQL from "../assets/sql.svg";
import dotnet from "../assets/dotnet.svg";
import Mongo from "../assets/mongodb.svg";
import linux from "../assets/linux.svg";
import docker from "../assets/docker-16-svgrepo-com.svg";
import Rest from "../assets/rest-api-svgrepo-com.svg";
import Typescript from "../assets/typescript-16-svgrepo-com.svg";
import Redux from "../assets/redux-svgrepo-com.svg";
const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          { name: "JavaScript", icon: Javascript },
          { name: "React", icon: React },
          { name: ".NET", icon: dotnet },
          { name: "Azure", icon: Azure },
          { name: "SQL", icon: SQL },
          { name: "MongoDB", icon: Mongo },
          { name: "Linux", icon: linux },
          { name: "Docker", icon: docker },
          { name: "REST APIs", icon: Rest },
          { name: "TypeScript", icon: Typescript },
          { name: "Redux", icon: Redux },
        ].map((skill) => (
          <div
            key={skill.name}
            className="flex justify-center bg-bunker-900 bg-opacity-50 p-4 rounded-lg text-center backdrop-blur-sm hover:bg-opacity-20 "
          >
            <img className="w-6" src={skill.icon} alt="Javascript" />
            <p className="text-bunker-200 self-center ml-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
