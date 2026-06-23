const stats = [
  ["4+", "Years Experience"],
  ["15+", "Projects Completed"],
  ["3+", "Major Apps"],
  ["20+", "Websites Contributed"],
];

export default function Stats() {
  return (
    <section className="section grid gap-6 md:grid-cols-4">
      {stats.map(([num, label]) => (
        <div key={label} className="card text-center">
          <h3 className="text-4xl font-black text-blue-600">{num}</h3>
          <p className="mt-2 text-slate-600">{label}</p>
        </div>
      ))}
    </section>
  );
}