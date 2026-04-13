import { certifications, education } from "../../_data/data";

const Credentials = () => {
  return (
    <section id="credentials" className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-800 dark:text-cyan-300">
            Education
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
            Academic foundation in business analytics and computing
          </h2>

          <div className="mt-6 grid gap-4">
            {education.map((item) => (
              <article
                key={`${item.school}-${item.date}`}
                className="rounded-[1.4rem] border border-slate-200 bg-slate-50/90 p-4 dark:border-white/10 dark:bg-slate-950/45"
              >
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  {item.school}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                  {item.credential}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.location}
                </p>
                <p className="mt-3 inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-800 dark:text-amber-200">
                  Completed {item.date}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_24px_50px_rgba(15,23,42,0.18)] dark:border-white/10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-200">
            Certifications
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Signals of discipline, process, and analytics training
          </h2>
          <div className="mt-6 grid gap-3">
            {certifications.map((certification) => (
              <div
                key={certification}
                className="rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-slate-200"
              >
                {certification}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
