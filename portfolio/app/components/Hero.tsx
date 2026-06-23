import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />

      <div className="section grid items-center gap-16 lg:grid-cols-2">
        <div className="reveal">
          <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600">
            Available for new opportunities
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Hi, I’m Alex <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MERN Developer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            I build fast, scalable and responsive web applications using MongoDB,
            Express.js, React.js and Node.js. I helped in Appzime, PicksPool, Driz
            and contributed to many websites.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 font-semibold text-white">
              View Projects <FaArrowRight />
            </a>
            <a href="#contact" className="rounded-full border border-slate-300 px-8 py-4 font-semibold">
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex gap-5 text-2xl">
            <FaLinkedin />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>

        <div className="reveal relative">
          <div className="rounded-[3rem] bg-gradient-to-br from-blue-100 to-indigo-100 p-6">
            <img src="/profile.png" alt="Alex" className="w-full rounded-[2.5rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}