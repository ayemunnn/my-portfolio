import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { profile } from "../../_data/data";

const Footer = () => {
  return (
    <footer className="px-4 pb-12 pt-6 sm:px-6 lg:px-10">
      <div className="rounded-[2rem] border border-white/70 bg-white/85 px-6 py-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-semibold text-slate-950 dark:text-white">
            {profile.name}
          </p>

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
