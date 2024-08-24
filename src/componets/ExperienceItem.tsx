export interface ExperienceInterface {
  company: string;
  position: string;
  from: string;
  to: string;
  work: string[];
}
interface ExperienceProps {
  data: ExperienceInterface;
}
const ExperienceItem: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <div className=" bg-gray-500 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center mb-2">
        <h3 className="text-xl font-semibold">{data.position}</h3>
      </div>
      <p className="text-gray-400 mb-2">
        {" "}
        {data.company} | {data.from} - {data.to}
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        {data.work.map((w: string) => (
          <li>{w}</li>
        ))}
      </ul>
    </div>
  );
};
export default ExperienceItem;
