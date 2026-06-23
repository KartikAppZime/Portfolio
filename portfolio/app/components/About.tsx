export default function About() {
  return (
    <section id="about" className="section grid gap-12 lg:grid-cols-2">
      <div className="reveal">
        <p className="font-semibold uppercase tracking-widest text-blue-600">About Me</p>
        <h2 className="mt-4 text-4xl font-black leading-tight">
          I create clean, scalable and user-friendly web applications.
        </h2>
      </div>

      <div className="reveal text-lg leading-8 text-slate-600">
        I’m a MERN Stack Developer focused on building modern websites, dashboards,
        APIs and full-stack applications. I love writing clean code, improving
        performance and creating smooth user experiences.
      </div>
    </section>
  );
}