"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileText } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { profile } from "../../_data/data";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

function currentHash() {
  if (typeof window === "undefined" || !window.location.hash) {
    return "#overview";
  }

  return window.location.hash;
}

const Navbar = () => {
  const [activeHash, setActiveHash] = useState("#overview");
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const syncActiveHash = () => {
      setActiveHash(currentHash());
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    syncActiveHash();
    onScroll();
    window.addEventListener("hashchange", syncActiveHash);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", syncActiveHash);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navigateTo = (hash: string) => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.location.hash === hash) {
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      window.location.hash = hash;
    }

    setActiveHash(hash);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <motion.nav
        initial={false}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: scrolled ? 0.988 : 1,
                y: scrolled ? -1 : 0,
              }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-5 py-3 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "border-white/70 bg-white/82 shadow-[0_20px_55px_rgba(15,23,42,0.22)] dark:border-white/12 dark:bg-slate-950/82"
            : "border-white/60 bg-white/72 shadow-[0_18px_45px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-slate-950/72"
        }`}
      >
        <button
          type="button"
          onClick={() => navigateTo("#overview")}
          className="shrink-0 text-sm font-semibold uppercase tracking-[0.26em] text-slate-900 transition-opacity duration-300 hover:opacity-80 dark:text-white"
        >
          Aman Kumar
        </button>

        <div className="hidden min-w-0 items-center justify-center gap-1 rounded-full bg-slate-900/4 px-2 py-1 md:flex dark:bg-white/5">
          {navItems.map((item) => {
            const isActive = activeHash === item.href;

            return (
              <div key={item.href} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                    className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-white"
                  />
                )}
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => navigateTo(item.href)}
                  className={
                    isActive
                      ? "relative rounded-full text-slate-950 hover:bg-transparent dark:text-slate-950 dark:hover:bg-transparent"
                      : "relative rounded-full text-slate-700 transition-all duration-300 hover:bg-white/70 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                  }
                >
                  {item.label}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-700 transition-all duration-300 hover:bg-white/70 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub className="size-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-700 transition-all duration-300 hover:bg-white/70 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full text-slate-700 transition-all duration-300 hover:bg-white/70 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <a href={profile.resume} target="_blank" rel="noreferrer" aria-label="Resume">
              <FileText className="size-5" />
            </a>
          </Button>
          <ModeToggle />
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
