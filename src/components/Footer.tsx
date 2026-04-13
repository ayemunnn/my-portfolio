import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { profile } from "../../_data/data";

const Footer = () => {
  return (
    <footer className="px-4 pb-12 pt-6 sm:px-6 lg:px-10">
      <div className="rounded-[2rem] border border-white/70 bg-white/85 px-6 py-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-950 dark:text-white">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Built around the latest resume and project story.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
