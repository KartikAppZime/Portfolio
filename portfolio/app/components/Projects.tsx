import React from 'react'

const projects = [
  {
    title: "Appzime",
    desc: "Helped build and enhance Appzime — a business management platform with role-based dashboards, subscriptions, and analytics.",
    tags: ["MERN Stack", "Stripe"],
  },
  {
    title: "PicksPool",
    desc: "Worked on PicksPool — a fantasy sports platform with real-time contests, leaderboards, and secure transactions.",
    tags: ["MERN Stack", "WebSockets"],
  },
  {
    title: "Driz",
    desc: "Contributed to Driz — a URL shortener with analytics, custom links, QR codes, and advanced dashboard.",
    tags: ["MERN Stack", "Analytics"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-slate-500">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-bold">Featured Projects</h2>
          <div className="mx-auto mt-4 h-[2px] w-14 bg-indigo-500" />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="reveal overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-52 bg-gradient-to-br from-slate-900 to-indigo-500" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{project.desc}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="font-bold uppercase">
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}