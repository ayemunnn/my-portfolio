import { experience } from "../../_data/data";

const Experience = () => {
  return (
    <section id="experience" className="px-4 py-8 sm:px-6 lg:px-10">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
          Roles that shaped my reporting, validation, and automation mindset
        </h2>
      </div>

      <div className="mt-8 grid gap-5">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.date}`}
            className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  {item.company}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.location}
                </p>
              </div>
              <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-800 dark:text-cyan-200">
                {item.date}
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {item.bullets.map((bullet) => (
                <p
                  key={bullet}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-7 text-slate-700 dark:border-white/10 dark:bg-slate-950/50 dark:text-slate-300"
                >
                  {bullet}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
