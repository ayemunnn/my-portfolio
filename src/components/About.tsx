"use client";

import React from "react";

const About = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-4">
      <div className="max-w-2xl grid items-center justify-start text-wrap mx-auto prose dark:prose-invert">
        <div className="">
          <div className="font-bold text-3xl text-black/90 dark:text-white/90">About</div>
          <p className="text-gray-700 dark:text-gray-300">
            I am an analytics-driven professional with a strong foundation in
            business analytics, data science, and business intelligence. I
            specialize in transforming raw, unstructured data into meaningful
            insights that support informed decision-making. My experience spans
            data analysis, dashboard development, automation, and basic machine
            learning, with a strong focus on clarity, accuracy, and usability.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            I am comfortable working across the full analytics lifecycle—from
            understanding business requirements and cleaning data, to building
            visualizations and communicating insights to both technical and
            non-technical stakeholders. I value structured problem-solving,
            clear documentation, and collaboration, and I enjoy bridging the gap
            between data and business needs to deliver practical, impact-focused
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
