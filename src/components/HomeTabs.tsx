"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

type TabId =
  | "overview"
  | "skills"
  | "projects"
  | "experience"
  | "credentials"
  | "contact";

const validTabs = new Set<TabId>([
  "overview",
  "skills",
  "projects",
  "experience",
  "credentials",
  "contact",
]);

function getTabFromHash(hash: string): TabId {
  const candidate = hash.replace("#", "") as TabId;
  return validTabs.has(candidate) ? candidate : "overview";
}

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const syncTabFromHash = () => {
      setActiveTab(getTabFromHash(window.location.hash));
    };

    syncTabFromHash();
    window.addEventListener("hashchange", syncTabFromHash);

    return () => window.removeEventListener("hashchange", syncTabFromHash);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab}
          id={activeTab}
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 18, filter: "blur(8px)" }
          }
          animate={
            shouldReduceMotion
              ? {}
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          exit={
            shouldReduceMotion
              ? {}
              : { opacity: 0, y: -12, filter: "blur(6px)" }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {activeTab === "overview" && (
            <div>
              <Hero />
              <About />
            </div>
          )}
          {activeTab === "skills" && <Skills />}
          {activeTab === "projects" && <Project />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "credentials" && <Credentials />}
          {activeTab === "contact" && <Contact />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomeTabs;
