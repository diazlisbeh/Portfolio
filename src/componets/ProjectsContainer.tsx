interface Props {
  children: React.ReactNode;
}

const ProjectContainer: React.FC<Props> = ({ children }) => {
  return (
    <section py-20>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">{children}</div>
    </section>
  );
};

export default ProjectContainer;
