const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "JavaScript",
          "React",
          "Node.js",
          "Python",
          "SQL",
          "MongoDB",
          "GraphQL",
          "Docker",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-gray-800 bg-opacity-50 p-4 rounded-lg text-center backdrop-blur-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
