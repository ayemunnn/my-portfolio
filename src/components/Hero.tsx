import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";

import { highlights, profile } from "../../_data/data";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(8,145,178,0.22),transparent_62%)]" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/6 dark:text-slate-200">
            <Sparkles className="size-4 text-cyan-700 dark:text-cyan-300" />
            Analytics, BI, and automation portfolio
          </div>

          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-cyan-800/80 dark:text-cyan-200/80">
              {profile.location}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              {profile.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg dark:text-slate-300">
              {profile.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              <Link href="#projects">
                Explore Projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-slate-300 bg-white/70 px-6 text-slate-900 hover:bg-white dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:bg-white/8"
            >
              <a href={profile.resume} target="_blank" rel="noreferrer">
                Download Resume
                <Download className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full text-slate-800 hover:bg-slate-200/70 dark:text-slate-200 dark:hover:bg-white/8"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-700 dark:text-emerald-300">
              <span className="size-2 rounded-full bg-current" />
              Open to analyst, BI, and data-focused roles
            </div>
            <div className="inline-flex items-center gap-2">
              <MapPin className="size-4" />
              Ottawa, Canada
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(245,158,11,0.18),rgba(8,145,178,0.18))] blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_30px_80px_rgba(2,8,23,0.55)]">
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200/70 bg-slate-50/90 p-4 dark:border-white/10 dark:bg-white/4">
              <Image
                src="/img/profile-image.png"
                alt="Portrait of Aman Kumar"
                width={92}
                height={92}
                className="rounded-3xl object-cover"
              />
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                  Aman Kumar
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
                  {profile.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  SQL, Python, Power BI, ETL, validation, and business-facing analytics.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[1.4rem] border border-slate-200/70 bg-white px-4 py-4 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                    {item.metric}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
