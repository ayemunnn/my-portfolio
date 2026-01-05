import { Mail } from "lucide-react";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-12 pb-20">
      <hr className="mt-23" />

      <div className="mt-6 text-center">
        <span className="text-gray-600 dark:text-gray-400 text-[16px] tracking-normal">
          Copyright@2025Ayemunnn
        </span>

        <div className="flex items-center justify-center gap-6 mt-2">

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ayemunnn"
          >
            <FiGithub className="size-5 text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white cursor-pointer" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/aman-kumar-a9550520b/"
          >
            <FaLinkedin className="size-5 text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white cursor-pointer" />
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:amankumark4@gmail.com"
          >
            <Mail className="size-5 text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
