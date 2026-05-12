"use client";

import { experience } from "../../_data/data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";

const Experience = () => {
  return (
    <section id="experience" className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
          A compact timeline of roles that shaped my analytics work
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          Hover over each branch to see the role details, timeline, and key
          contributions.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
        <div className="relative mx-auto max-w-4xl">
          <div className="pointer-events-none absolute bottom-12 left-1/2 top-12 hidden w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/20 via-cyan-400/70 to-amber-300/40 dark:from-cyan-300/15 dark:via-cyan-300/65 dark:to-amber-200/30 sm:block" />

          <div className="space-y-8 sm:space-y-6">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              const branchCard = (
                <HoverCard openDelay={120} closeDelay={90}>
                  <HoverCardTrigger asChild>
                    <button
                      type="button"
                      className={`flex w-full flex-col rounded-[1.4rem] border border-slate-200/80 bg-slate-50/95 px-4 py-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_16px_35px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-950/75 dark:hover:border-cyan-400/40 sm:max-w-[18rem] ${
                        isLeft ? "sm:ml-auto sm:text-right" : "sm:mr-auto"
                      }`}
                    >
                      <span className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                        {item.date}
                      </span>
                      <span className="mt-2 text-base font-semibold leading-6 text-slate-950 dark:text-white">
                        {item.role}
                      </span>
                      <span className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        {item.company}
                      </span>
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent
                    className="w-[min(24rem,calc(100vw-2rem))] rounded-[1.5rem] border border-slate-200 bg-white p-5 text-left text-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    side={isLeft ? "left" : "right"}
                    align="center"
                    sideOffset={18}
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                      {item.date}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold">{item.role}</h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {item.company} • {item.location}
                    </p>
                    <div className="mt-4 grid gap-2">
                      {item.bullets.map((bullet) => (
                        <p
                          key={bullet}
                          className="rounded-2xl bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700 dark:bg-white/5 dark:text-slate-300"
                        >
                          {bullet}
                        </p>
                      ))}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );

              return (
                <div
                  key={`${item.company}-${item.date}`}
                  className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]"
                >
                  <div className="hidden sm:block">{isLeft ? branchCard : null}</div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div
                      className={`absolute hidden h-px w-12 sm:block ${
                        isLeft
                          ? "right-1/2 bg-gradient-to-l from-cyan-400/60 to-transparent dark:from-cyan-300/50"
                          : "left-1/2 bg-gradient-to-r from-cyan-400/60 to-transparent dark:from-cyan-300/50"
                      }`}
                    />
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-cyan-500 shadow-[0_0_0_8px_rgba(6,182,212,0.10)] dark:border-slate-950">
                      <div className="h-1.5 w-1.5 rounded-full bg-white dark:bg-slate-950" />
                    </div>
                  </div>

                  <div className="sm:hidden">{branchCard}</div>
                  <div className="hidden sm:block">{!isLeft ? branchCard : null}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
