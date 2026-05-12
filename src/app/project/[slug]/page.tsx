import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";

import { projects } from "../../../../_data/data";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <section className="px-4 pb-14 pt-28 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Button
          asChild
          variant="ghost"
          className="rounded-full text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/8"
        >
          <Link href="/#projects">
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>
        </Button>

        <div className="mt-6 rounded-[2.2rem] border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-800 dark:text-cyan-200">
              {project.category}
            </span>
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-800 dark:text-amber-200">
              {project.featuredMetric}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300">
            {project.show}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.git && (
              <Button
                asChild
                className="rounded-full bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
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
                variant="outline"
                className="rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/8"
              >
                <a href={project.link} target="_blank" rel="noreferrer">
                  Open Project
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            )}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[1.8rem] border border-slate-200/80 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-slate-950/45">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                Project overview
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {project.desc}
              </p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.3rem] border border-red-200 bg-red-50 px-4 py-4 dark:border-red-500/20 dark:bg-red-500/8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-300">
                    Problem
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {project.problem}
                  </p>
                </div>
                <div className="rounded-[1.3rem] border border-emerald-200 bg-emerald-50 px-4 py-4 dark:border-emerald-500/20 dark:bg-emerald-500/8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                    Solution
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[1.8rem] border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-slate-950/45">
                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                  Impact
                </h2>
                <div className="mt-4 grid gap-3">
                  {project.impact.map((item) => (
                    <p
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-slate-950/45">
                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                  Technologies
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.lang.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.8rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(248,250,252,0.95),rgba(207,250,254,0.82),rgba(254,249,195,0.75))] p-4 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(8,47,73,0.9),rgba(120,53,15,0.7))]">
            {project.img ? (
              <Image
                src={`/img/${project.img}`}
                alt={`Screenshot for ${project.name}`}
                width={1400}
                height={900}
                className="w-full rounded-[1.2rem] border border-white/50 object-cover"
              />
            ) : (
              <div className="flex min-h-64 items-end rounded-[1.2rem] bg-slate-950 p-6 text-white dark:bg-slate-900">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">
                    {project.category}
                  </p>
                  <p className="mt-3 text-3xl font-semibold">{project.featuredMetric}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                    {project.show}
                  </p>
                </div>
              </div>
            )}
          </div>

          {project.documentation && (
            <div className="mt-8 rounded-[1.8rem] border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-slate-950/45">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                {project.documentation.title}
              </h2>
              <div className="mt-5 grid gap-4">
                {project.documentation.sections.map((section) => (
                  <div
                    key={section.heading}
                    className="rounded-[1.3rem] border border-slate-200 bg-slate-50/90 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-800 dark:text-cyan-200">
                      {section.heading}
                    </h3>
                    <div className="mt-3 grid gap-2">
                      {section.bullets.map((bullet) => (
                        <p
                          key={bullet}
                          className="text-sm leading-7 text-slate-700 dark:text-slate-300"
                        >
                          {bullet}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {project.documentation.visuals &&
                project.documentation.visuals.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                      Visual analysis
                    </h3>
                    <div className="mt-5 grid gap-6">
                      {project.documentation.visuals.map((visual) => (
                        <div
                          key={visual.title}
                          className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-slate-50/90 dark:border-white/10 dark:bg-white/5"
                        >
                          <div className="p-4">
                            <div className="overflow-hidden rounded-[1.2rem] border border-white/50 bg-white dark:border-white/10 dark:bg-slate-950/60">
                              <Image
                                src={`/img/${visual.image}`}
                                alt={visual.alt}
                                width={1400}
                                height={900}
                                className="h-auto w-full object-contain"
                              />
                            </div>
                          </div>
                          <div className="border-t border-slate-200/80 px-5 py-5 dark:border-white/10">
                            <h4 className="text-lg font-semibold text-slate-950 dark:text-white">
                              {visual.title}
                            </h4>
                            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                              {visual.explanation}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                              {visual.context}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
