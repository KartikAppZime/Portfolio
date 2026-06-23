import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss, SiPostman } from "react-icons/si";

const skills = [
  [<SiMongodb />, "MongoDB"],
  [<SiExpress />, "Express.js"],
  [<FaReact />, "React.js"],
  [<FaNodeJs />, "Node.js"],
  [<SiTypescript />, "TypeScript"],
  [<SiTailwindcss />, "Tailwind CSS"],
  [<FaGithub />, "GitHub"],
  [<SiPostman />, "Postman"],
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="text-center text-4xl font-black">My Tech Stack</h2>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {skills.map(([icon, name]) => (
          <div key={String(name)} className="card reveal text-center">
            <div className="mx-auto mb-5 text-5xl text-blue-600">{icon}</div>
            <h3 className="font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}