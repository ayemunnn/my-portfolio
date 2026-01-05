import React from "react";
import { Star } from "lucide-react";

const experiences = [
  {
    date: "Sep 2025 – Dec 2025",
    role: "Business Analyst",
    company: "Insight Weavers",
  },
  {
    date: "Oct 2023 – Apr 2024",
    role: "Customer Support Executive",
    note: "Data-Focused",
    company: "Tech Mahindra (CRED)",
  },
  {
    date: "May 2025 – Aug 2025",
    role: "Team Lead",
    note: "Analytics & Reporting",
    company: "SETu Smart Card (Capstone)",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-2 sm:px-20 lg:px-20">
      <hr className="mt-12" />

      <div className="mt-10 p-4 sm:p-6">
        <h2 className="font-bold text-2xl text-black">
          Professional Experience
        </h2>

        <div className="mt-8 space-y-4">
          {experiences.map((x) => (
            <div
              key={x.date}
              className="
                grid gap-4 items-start
                md:grid-cols-[180px_1fr]
                rounded-xl border
                p-5
                bg-white
              "
            >
              {/* Date */}
              <div className="text-sm text-gray-500 whitespace-nowrap pt-1">
                {x.date}
              </div>

              {/* Content */}
              <div className="space-y-1">
                <div className="text-base font-semibold text-gray-900 leading-snug">
                  {x.role}
                  {x.note && (
                    <span className="text-gray-500 font-normal">
                      {" "}
                      — {x.note}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-[#2563EB]">
                  <Star className="h-4 w-4" />
                  <span>{x.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="mt-12" />
    </section>
  );
};

export default Experience;
