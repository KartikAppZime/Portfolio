import { FaCode, FaDatabase, FaRocket, FaServer } from "react-icons/fa";

const services = [
  [<FaCode />, "Frontend Development", "Modern responsive UI with React, Next.js and Tailwind CSS."],
  [<FaServer />, "Backend Development", "REST APIs, authentication, server logic and scalable backend systems."],
  [<FaDatabase />, "Database Design", "Clean MongoDB schemas, optimized queries and structured data."],
  [<FaRocket />, "Performance Optimization", "Fast loading, SEO-friendly and optimized web applications."],
];

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="text-center text-4xl font-black">What I Do</h2>

      <div className="mt-14 grid gap-8 md:grid-cols-4">
        {services.map(([icon, title, desc]) => (
          <div key={String(title)} className="card reveal">
            <div className="mb-6 text-4xl text-blue-600">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}