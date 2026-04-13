import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

import { projects } from "../../_data/data";
import { Button } from "./ui/button";

const Project = () => {
  return (
    <section id="projects" className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-800 dark:text-cyan-300">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
            Selected work across BI, data engineering, analytics, and AI
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          A focused project selection showing how I approach business reporting,
          automation, data pipelines, and applied machine learning.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
          >
            <div className="rounded-[1.5rem] border border-slate-200/70 bg-[linear-gradient(135deg,rgba(248,250,252,0.9),rgba(207,250,254,0.8),rgba(254,249,195,0.8))] p-4 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.9),rgba(8,47,73,0.85),rgba(113,63,18,0.65))]">
              {project.img ? (
                <Image
                  src={`/img/${project.img}`}
                  alt={project.name}
                  width={1200}
                  height={900}
                  className="h-56 w-full rounded-[1rem] object-cover object-top"
                />
              ) : (
                <div className="flex h-56 flex-col justify-between rounded-[1rem] bg-slate-950 p-5 text-white dark:bg-slate-900">
                  <span className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                    {project.category}
                  </span>
                  <div>
                    <p className="text-3xl font-semibold">{project.featuredMetric}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {project.show}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-800 dark:text-cyan-200">
                  {project.category}
                </span>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-800 dark:text-amber-200">
                  {project.featuredMetric}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {project.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.lang.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 dark:border-white/10 dark:bg-white/6 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  <Link href={`/project/${project.slug}`}>
                    View Details
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                {project.git && (
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/8"
                  >
                    <a href={project.git} target="_blank" rel="noreferrer">
                      GitHub
                      <Github className="size-4" />
                    </a>
                  </Button>
                )}
                {project.link && (
                  <Button
                    asChild
                    variant="ghost"
                    className="rounded-full text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/8"
                  >
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Live Link
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
