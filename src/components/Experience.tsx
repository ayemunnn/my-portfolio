import React from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

const Experience = () => {
  return (
    <div id="experience" className="px-2 sm:px-20 lg:px-20">
      <hr className="mt-30 px-10" />

      <div className="mt-18 p-6">
        <div>
          <h2 className="font-bold text-2xl text-black">
            Professional Experience
          </h2>

          {/* Insight Weavers */}
          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              Sep 2025 – Dec 2025
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Business Analyst
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                Insight Weavers
              </Button>
            </div>
          </div>

          {/* Tech Mahindra */}
          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              Oct 2023 – Apr 2024
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Customer Support Executive (Data-Focused)
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                Tech Mahindra (CRED)
              </Button>
            </div>
          </div>

          {/* SETu Capstone */}
          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              May 2025 – Aug 2025
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Team Lead – Analytics & Reporting
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                SETu Smart Card (Capstone)
              </Button>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="text-wrap prose border p-3 mt-14 rounded-sm shadow-sm">
          <Star className="text-[#3B82F6] mb-2" />
          <span className="bg-[#EEF4FF] text-[#3B82F6] block p-2 rounded-sm">
            I’m an <strong>analytics-driven professional</strong> with hands-on
            experience translating complex datasets into
            <strong> executive-ready insights, KPI frameworks,</strong> and
            high-impact dashboards.
            <br />
            <br />
            My background spans <strong>SQL, Power BI, Tableau, Python,</strong>
            and analytics-ready data modeling, with proven experience
            improving reporting accuracy, reducing review time, and
            strengthening stakeholder trust in metrics.
            <span className="text-gray-700 block mt-2">
              I’m actively seeking Business Analyst, Data Analyst, or
              Analytics-focused roles where data storytelling and decision
              support matter.
            </span>
          </span>
        </div>
      </div>

      <hr className="mt-20" />
    </div>
  );
};

export default Experience;
