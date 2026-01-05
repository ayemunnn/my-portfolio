"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="py-28 mt-10 px-4 sm:px-6 lg:px-4">
      <div className="max-w-2xl grid items-center justify-start text-wrap mx-auto prose">
        <div className="">
          <div className="font-bold text-3xl text-black/90">About</div>
          <p>
            I am an analytics-driven professional with a strong foundation in
            business analytics, data science, and business intelligence. I
            specialize in transforming raw, unstructured data into meaningful
            insights that support informed decision-making. My experience spans
            data analysis, dashboard development, automation, and basic machine
            learning, with a strong focus on clarity, accuracy, and usability.
          </p>
          <p className="mt-4">
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

      <Link
        href="https://www.linkedin.com/in/stephen-adebanjo-82a6ba359/"
        target="_blank"
      >
        <div className="flex justify-center mt-10 px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="py-2 px-3 bg-white shadow-sm rounded-sm w-fit"
          >
            <Image
              src="/img/profile-pic.jpg"
              width={200}
              height={200}
              alt="profile image"
              className="rounded-sm bg-white w-full max-w-[200px]"
            />
            <span className="text-sm block text-center mt-1 text-gray-800">
              @midecode
            </span>
          </motion.div>
        </div>
      </Link>

      <div className="flex justify-center mt-6 px-4">
        <Button className="!bg-black/90 text-white !cursor-pointer !py-4 !px-6 hover:!bg-black/82">
          <a href="#contact" aria-label="Contact for collaboration">
            Let&apos;s collaborate!
          </a>
        </Button>
      </div>
    </div>
  );
};

export default About;
