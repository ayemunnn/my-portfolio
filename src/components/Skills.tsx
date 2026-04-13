import { skillGroups } from "../../_data/data";

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-800 dark:text-cyan-300">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
            Tools and strengths I use to ship reliable analytics work
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.8rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-white/10 dark:bg-white/6 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
