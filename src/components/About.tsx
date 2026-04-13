import { skillGroups, profile } from "../../_data/data";

const About = () => {
  return (
    <section id="about" className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">
            Analytics work that stays practical, measurable, and business-ready
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300">
            {profile.intro}
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
            My recent work spans ETL pipelines, reporting automation, dashboard
            development, market research, real-time data processing, and applied
            AI projects. I enjoy taking unclear data problems, structuring them,
            and delivering outputs that are easier for technical and
            non-technical teams to use with confidence.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-7 text-white shadow-[0_24px_50px_rgba(15,23,42,0.18)] dark:border-white/10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">
            Core strengths
          </p>
          <div className="mt-5 grid gap-4">
            {skillGroups.slice(0, 2).map((group) => (
              <div key={group.title} className="rounded-[1.4rem] bg-white/6 p-4">
                <h3 className="text-lg font-medium">{group.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {group.items.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
