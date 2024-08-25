const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-6">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "JavaScript",
          "React",
          ".NET",
          "Azure",
          "SQL",
          "MongoDB",
          "Linux",
          "Docker",
          "REST APIs",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-bunker-900 bg-opacity-50 p-4 rounded-lg text-center backdrop-blur-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
