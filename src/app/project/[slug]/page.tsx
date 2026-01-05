import React from "react";
import { projects } from "../../../../_data/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import { FaExclamation } from "react-icons/fa6";

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
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="py-3 px-4 sm:px-6 md:px-10">
      <div className="mt-30 text-wrap">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="font-semibold text-[32px] sm:text-[38px] md:text-[45px] text-black dark:text-white">
            {project.name}
          </h2>
          <p className="flex-grow text-gray-600 dark:text-gray-400 text-[16px] sm:text-[18px] md:text-[19px] mt-0">
            {project.show}
          </p>
        </div>

        <div className="mt-8 rounded-xl border dark:border-gray-800 p-4 sm:p-6 md:p-8 bg-[#FAFAFA] dark:bg-gray-900/50">
          <span className="font-bold text-[16px] sm:text-[17px] md:text-[18px] text-black dark:text-white flex items-center gap-2">
            Description
            <Button size="icon" className="bg-[#EEF4FF] dark:bg-blue-900/30 text-[#3B82F6] dark:text-blue-400 size-6 rounded-full pointer-events-none">
              <FaExclamation className="size-3" />
            </Button>
          </span>
          <p className="text-base text-wrap prose dark:prose-invert font-light text-gray-700 dark:text-gray-300 mt-2 flex-grow">
            {project.desc}
          </p>

          <h3 className="mt-3 text-red-500 dark:text-red-400 text-base text-wrap prose font-light flex-grow">
            Problem I noticed: {project.problem}
          </h3>

          <h2 className="mt-3 text-base text-wrap prose dark:prose-invert font-light flex-grow">
            <span className="text-[#178D00] dark:text-green-400 text-[16px]">
              Solution I rendered ✅:
            </span>{" "}
            <span className="text-gray-700 dark:text-gray-300">{project.solution}</span>
          </h2>

          <hr className="mt-8 mb-8 dark:border-gray-800" />

          <div>
            <span className="font-bold text-[16px] sm:text-[17px] md:text-[18px] text-black dark:text-white">
              Technologies
            </span>
            <ul className="flex flex-wrap gap-2 mt-3">
              {project.lang.map((tech) => (
                <li key={tech}>
                  <Button className="bg-[#E1F9DC] dark:bg-green-900/30 text-[#178D00] dark:text-green-400 pointer-events-none">
                    {tech}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-2 flex flex-wrap gap-4 mt-8">
          {project.link && (
            <Link target="_blank" href={project.link}>
              <Button className="!py-6 mt-3 !bg-black/90 dark:!bg-white dark:!text-black text-white hover:!bg-black dark:hover:!bg-white/90 !cursor-pointer">
                View Project <ExternalLink />
              </Button>
            </Link>
          )}

          {project.git && (
            <Link target="_blank" href={project.git}>
              <Button className="!py-6 mt-3 !bg-black/90 dark:!bg-white dark:!text-black text-white hover:!bg-black dark:hover:!bg-white/90 !cursor-pointer">
                Github <FiGithub />
              </Button>
            </Link>
          )}
        </div>

        <div className="mt-18">
          {project.img && (
            <Image
              src={`/img/${project.img}`}
              alt={`Screenshot of ${project.name} project`}
              width={1200}
              height={800}
              className="rounded-xl w-full h-auto border dark:border-gray-800"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
