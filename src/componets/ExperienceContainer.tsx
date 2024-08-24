import React from "react";

interface Props {
  children: React.ReactNode;
}
const ExperienceContainer: React.FC<Props> = ({ children }) => {
  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
      <div className="space-x-6">{children}</div>
    </section>
  );
};

export default ExperienceContainer;
